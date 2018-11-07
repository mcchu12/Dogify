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

@app.route("/")
def hello():
    return 'Welcome to Dogify backend server!'

@app.route('/api/upload', methods=['POST'])
def upload():
    target = os.path.join(APP_ROOT, 'static/upload')
    img = request.files['file']
    destination = '/'.join([target, img.filename])
    img.save(destination)
    breed = classifier.classify(destination)
    return jsonify(status='done', breed=breed)

if __name__ == '__main__':
    app.run()
