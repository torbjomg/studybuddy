from app import db


class Article(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    url = db.Column(db.String(150))
    title = db.Column(db.String(100))
    revision = db.Column(db.Integer)


class Section(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(150))
    content = db.Column(db.String(30000))
    source = db.Column(db.Integer, db.ForeignKey("article.id"))


class Question(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    source = db.Column(db.Integer, db.ForeignKey("section.id"))
    start_index = db.Column(db.Integer)
    end_index = db.Column(db.Integer)
    question = db.Column(db.String(100))
    answer = db.Column(db.String(50))
    alternatives = db.Column(db.String(300))
    rating = db.Column(db.Integer)

    @property
    def jsonify(self):
        return {
            "question": self.question,
            "answer": self.answer,
            "rating": self.rating,
            "alternatives": self.alternatives,
            "source": self.get_parent_section().name,
        }

    def get_parent_section(self):
        return Section.query.filter_by(id=self.source).first()

    def get_parent_article(self):
        return Article.query.filter_by(id=self.get_parent_section().source).first()
