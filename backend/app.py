import os
import shutil
import glob
from PIL import Image
from flask_cors import CORS
from flask import Flask, request, url_for, jsonify
from classifier import BreedClassifier

app = Flask(__name__)
CORS(app)

def init(app):
    global classifier
    classifier = BreedClassifier()

init(app)

APP_ROOT = os.path.dirname(os.path.abspath(__file__))
UPLOAD_PATH =  os.path.join(APP_ROOT, 'static/upload')

@app.route("/")
def index():
    return 'Welcome to Dogify backend server!'

@app.route('/api/predict', methods=['POST'])
def predict():
    # Save image
    img = request.files['file']
    img_path = '/'.join([UPLOAD_PATH, img.filename])
    img.save(img_path)
    # Classify breed
    breed, temparement = classifier.classify(img_path)
    # Delete image 
    os.remove(img_path)
    return jsonify(breed=breed, temparement=temparement)

if __name__ == '__main__':
    app.run()
