import os
import shutil
import glob
from datetime import datetime

from PIL import Image
from flask_cors import CORS
from flask import Flask, request, url_for, jsonify
from flask_sqlalchemy import SQLAlchemy
from marshmallow import Schema, fields

from classifier import BreedClassifier

app = Flask(__name__)
CORS(app)

# Config database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

APP_ROOT = os.path.dirname(os.path.abspath(__file__))
UPLOAD_PATH =  os.path.join(APP_ROOT, 'static/upload')

classifier = BreedClassifier()

# Schema
class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    date_posted = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    author = db.Column(db.String(50), nullable=False)
    content = db.Column(db.Text, nullable=False)

    def __repr__(self):
        return f"Post('{self.title}', '{self.date_posted}', '{self.author}')"

class PostSchema(Schema):
    id = fields.Number()
    title = fields.Str()
    date_posted = fields.DateTime()
    author = fields.Str()
    content = fields.Str()

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

@app.route('/api/blog')
def blog():
    # fetch posts from database
    session = db.session()
    post_objects = session.query(Post).all()

    # transform into Json serializable objects
    schema = PostSchema(many=True)
    posts = schema.dump(post_objects)

    # serialize as Json
    session.close()
    return jsonify(posts)

if __name__ == '__main__':
    app.run()
