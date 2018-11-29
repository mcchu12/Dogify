from flask_cors import CORS
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from app.classifier import BreedClassifier

app = Flask(__name__)
CORS(app)

# Config
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data/data.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

classifier = BreedClassifier()

from app import routes