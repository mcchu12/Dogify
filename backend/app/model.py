from datetime import datetime
from marshmallow import Schema, fields

from app import db

class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    date_posted = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    author = db.Column(db.String(50), nullable=False)
    thumbnail = db.Column(db.Text, nullable=True)
    content = db.Column(db.Text, nullable=False)

    def __repr__(self):
        return f"Post('{self.title}', '{self.date_posted}', '{self.author}')"

class PostSchema(Schema):
    id = fields.Number()
    title = fields.Str()
    date_posted = fields.DateTime()
    thumbnail = fields.Str()
    author = fields.Str()
    content = fields.Str()
