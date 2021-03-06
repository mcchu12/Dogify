import os

from flask import render_template, request, jsonify, url_for, send_from_directory
from sqlalchemy import desc

from app import app
from app import db
from app import classifier
from app.model import Post, PostSchema, Author, AuthorSchema
from app.classifier import BreedClassifier

APP_ROOT = os.path.dirname(os.path.abspath(__file__))
UPLOAD_PATH = os.path.join(APP_ROOT, 'upload')


@app.route("/api")
def index():
    return render_template('index.html')


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


@app.route('/api/blogs')
def get_blogs():
    # fetch posts from database
    session = db.session()
    post_objects = session.query(Post).order_by(Post.date_posted.desc()).all()

    # transform into Json serializable objects
    schema = PostSchema(many=True)
    posts = schema.dump(post_objects)[0]

    # serialize as Json
    session.close()

    return jsonify(posts)


@app.route('/api/blogs/<id>')
def get_post(id):
    session = db.session()
    post_object = session.query(Post).get(id)

    post = PostSchema().dump(post_object)[0]

    session.close()
    return jsonify(post)


@app.route('/api/add-author')
def author():
    return render_template('author.html')


@app.route('/api/add-author', methods=['POST'])
def add_author():
    # create author object
    posted_author = AuthorSchema(only=('name', 'avatar', 'introduction'))\
        .load(request.form)

    author = Author(**posted_author.data)

    # add new author to database
    session = db.session()
    session.add(author)
    session.commit()

    # return newly added author
    new_author = AuthorSchema().dump(author)
    return jsonify(new_author)


@app.route('/api/add-blog')
def blog():
    return render_template('blog.html')


@app.route('/api/add-blog', methods=['POST'])
def add_blog():
    # create author object
    posted_post = PostSchema(only=('title', 'thumbnail', 'author_id', 'preview', 'content'))\
        .load(request.form)

    post = Post(**posted_post.data)

    # add new author to database
    session = db.session()
    session.add(post)
    session.commit()

    # return newly added author
    new_post = PostSchema().dump(post)
    return jsonify(new_post)


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/dist/' + path):
        return send_from_directory(app.static_folder + '/dist', path)
    else:
        return send_from_directory(app.static_folder + '/dist', 'index.html')
