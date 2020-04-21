from numpy import expand_dims, argmax
from pandas import read_csv
from keras.preprocessing import image
from keras.applications.mobilenet import preprocess_input
from keras.models import load_model

class BreedClassifier:

    def __init__(self):
        # self.model_loaded = False
        self.initialize_model()

    def initialize_model(self):
        self.load_model()
        self.load_data()
        # self.model_loaded = True

    def load_model(self):
        # Load Keras model without top layer
        self.base = load_model('app/data/models/base.h5')
        self.base._make_predict_function()

        # Load top of Keras model
        self.top = load_model('app/data/models/top.h5')
        self.top._make_predict_function()

        # Create top layer with pretrained weights
        self.model = load_model('app/data/models/breed_model.h5')
        self.model._make_predict_function()

    def load_data(self):
        # Load breeds data
        self.dog_names = read_csv('app/data/breeds.csv').name.tolist()
        self.dog_temparement = read_csv('app/data/breeds.csv').temperament.tolist()
        # Load imagenet classes
        self.imagenet = read_csv('app/data/imagenet.txt').classes.tolist()

    def path_to_tensor(self, img_path):
        # loads RGB image from path and resize to 224x224
        img = image.load_img(img_path, target_size=(224, 224))
        # convert image to 3D tensor with shape (224, 224, 3)
        x = image.img_to_array(img)
        # convert 3D tensor to 4D tensor with shape (1, 224, 224, 3)
        input = expand_dims(x, axis=0)
        # Preprocess tensor to ready for prediction
        return preprocess_input(input)

    def is_dog(self, bottleneck):
        # Check if the image contains dog
        predictions = self.top.predict(bottleneck)
        index = argmax(predictions)
        # From 151 to 268 are dog breeds according to imagenet label
        return ((index <= 268) & (index >= 151)), index

    def extract_bottleneck(self, tensor):
        # Obtain bottleneck features
        return self.base.predict(tensor)

    def classify(self, img_path):
        # if (not self.model_loaded):
        #     self.initialize_model()
        # Convert path to tensor
        tensor = self.path_to_tensor(img_path)
        # Extract bottleneck
        bottleneck = self.extract_bottleneck(tensor)
        # Check if image contain dog
        is_dog, imagenet_index = self.is_dog(bottleneck)
        if is_dog:
            # Make prediction
            predictions = self.model.predict(bottleneck)
            # Get highest probability
            index = argmax(predictions)
            return self.dog_names[index], self.dog_temparement[index]
        else:
            return "No dog found", self.imagenet[imagenet_index]
