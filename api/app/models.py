from app import db


class Article(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    url = db.Column(db.String(150))
    revision = db.Column(db.Integer)


class Section(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(150))
    content = db.Column(db.String(30000))
    source = db.Column(db.Integer, db.ForeignKey("article.id"))


class Snippet(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    source = db.Column(db.Integer, db.ForeignKey("section.id"))
    start_index = db.Column(db.Integer)
    end_index = db.Column(db.Integer)
    question = db.Column(db.String(100))
    answer = db.Column(db.String(50))
    alternatives = db.Column(db.String(300))
    rating = db.Column(db.Integer)
