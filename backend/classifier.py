import numpy as np
import pandas as pd
from keras.preprocessing import image
from keras.applications.mobilenet import MobileNet, preprocess_input
from keras.models import Sequential
from keras.layers import Dense, GlobalAveragePooling2D

class BreedClassifier:

    def __init__(self):
        self.dog_names = pd.read_csv('dog_names.txt').Names.tolist()
        self.init_model()

    def init_model(self):
        # Load Keras models without top layer
        self.base = MobileNet(input_shape=(224, 224, 3), weights='imagenet', include_top=False)
        self.base._make_predict_function()

        # Create top layer with pretrained weights
        self.model = Sequential()
        self.model.add(GlobalAveragePooling2D(input_shape=(7, 7, 1024)))
        self.model.add(Dense(133, activation='softmax'))
        self.model.load_weights('static/model/weights.best.mobilenet.hdf5')
        self.model._make_predict_function()

    def path_to_tensor(self, img_path):
        # loads RGB image from path and resize to 224x224
        img = image.load_img(img_path, target_size=(224, 224))
        # convert to 3D tensor with shape (224, 224, 3)
        x = image.img_to_array(img)
        # convert 3D tensor to 4D tensor with shape (1, 224, 224, 3)
        return np.expand_dims(x, axis=0)

    def extract_bottleneck(self, tensor):
        input = preprocess_input(tensor)
        return self.base.predict(input)

    def classify(self, img_path):
        # Convert path to tensor
        tensor = self.path_to_tensor(img_path)
        print('path_to_tensor Passed!')
        # Extract bottleneck
        bottleneck = self.extract_bottleneck(tensor)
        print('bottleneck Passed!')
        # Make prediction
        prediction = self.model.predict(bottleneck)
        i = np.argmax(prediction)
        return self.dog_names[i]
