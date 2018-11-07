import numpy as np
import pandas as pd
from keras.preprocessing import image
from keras.applications.mobilenet import MobileNet, preprocess_input
from keras.models import Sequential
from keras.layers import Dense, GlobalAveragePooling2D

class BreedClassifier:

    def __init__(self):
        self.load_model()
        self.load_breeds_data()

    def load_model(self):
        # Load full Keras model
        self.dog_detector = MobileNet(input_shape=(224, 224, 3), weights='imagenet')
        self.dog_detector._make_predict_function()

        # Load Keras models without top layer
        self.base = MobileNet(input_shape=(224, 224, 3), weights='imagenet', include_top=False)
        self.base._make_predict_function()

        # Create top layer with pretrained weights
        self.model = Sequential()
        self.model.add(GlobalAveragePooling2D(input_shape=(7, 7, 1024)))
        self.model.add(Dense(133, activation='softmax'))
        self.model.load_weights('static/model/weights.best.mobilenet.hdf5')
        self.model._make_predict_function()

    def load_breeds_data(self):
        # Load breeds data 
        self.dog_names = pd.read_csv('breeds.csv').name.tolist()
        self.dog_temparement = pd.read_csv('breeds.csv').temperament.tolist()
        # Load imagenet classes
        self.imagenet = pd.read_csv('imagenet.txt').classes.tolist()

    def path_to_tensor(self, img_path):
        # loads RGB image from path and resize to 224x224
        img = image.load_img(img_path, target_size=(224, 224))
        # convert image to 3D tensor with shape (224, 224, 3)
        x = image.img_to_array(img)
        # convert 3D tensor to 4D tensor with shape (1, 224, 224, 3)
        input = np.expand_dims(x, axis=0)
        # Preprocess tensor to ready for prediction
        return preprocess_input(input)

    def is_dog(self, tensor):
        # Check if the image contains dog
        predictions = self.dog_detector.predict(tensor)
        index = np.argmax(predictions)
        # From 151 to 268 are dog breeds according to imagenet label 
        return ((index <= 268) & (index >= 151)), index

    def extract_bottleneck(self, tensor):
        # Obtain bottleneck features
        return self.base.predict(tensor)

    def classify(self, img_path):
        # Convert path to tensor
        tensor = self.path_to_tensor(img_path)
        is_dog, imagenet_index = self.is_dog(tensor)
        if is_dog:
            # Extract bottleneck
            bottleneck = self.extract_bottleneck(tensor)
            # Make prediction
            predictions = self.model.predict(bottleneck)
            # Get highest probability
            index = np.argmax(predictions)
            return self.dog_names[index], self.dog_temparement[index]
        else:
            return "No dog found", self.imagenet[imagenet_index]
            
