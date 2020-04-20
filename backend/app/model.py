from datetime import datetime
from marshmallow import Schema, fields

from app import db


class Author(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    avatar = db.Column(db.Text, nullable=False,
                       default='static/img/avatar-def.jpg')
    introduction = db.Column(db.Text, nullable=False)
    posts = db.relationship('Post', backref='author', lazy=True)

    def __repr__(self):
        return f"Author('{self.name}', '{self.avatar}')"


class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    date_posted = db.Column(db.DateTime, nullable=False,
                            default=datetime.utcnow)
    thumbnail = db.Column(db.Text, nullable=False,
                          default='static/img/default.jpg')
    preview = db.Column(db.Text, nullable=True)
    content = db.Column(db.Text, nullable=False)
    author_id = db.Column(db.Integer, db.ForeignKey(
        'author.id'), nullable=False)

    def __repr__(self):
        return f"Post('{self.title}', '{self.date_posted}', '{self.author}')"


class AuthorSchema(Schema):
    id = fields.Number()
    name = fields.Str()
    avatar = fields.Str()
    introduction = fields.Str()


class PostSchema(Schema):
    id = fields.Number()
    title = fields.Str()
    date_posted = fields.DateTime()
    thumbnail = fields.Str()
    author = fields.Nested(AuthorSchema)
    preview = fields.Str()
    content = fields.Str()
