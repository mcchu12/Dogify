import os
import shutil
import glob

from flask import request, jsonify
from sqlalchemy import desc

from app import app
from app import db
from app.model import Post, PostSchema
from app.classifier import BreedClassifier

APP_ROOT = os.path.dirname(os.path.abspath(__file__))
UPLOAD_PATH =  os.path.join(APP_ROOT, 'static/upload')

classifier = BreedClassifier()

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
    post_objects = session.query(Post).order_by(Post.date_posted.desc()).all()

    # transform into Json serializable objects
    schema = PostSchema(many=True)
    posts = schema.dump(post_objects)

    # serialize as Json
    session.close()
    return jsonify(posts)

@app.route('/api/blog/<id>')
def post(id):
  session = db.session()
  post_object = session.query(Post).get(id)

  post = PostSchema().dump(post_object)

  session.close()
  return jsonify(post)
  
