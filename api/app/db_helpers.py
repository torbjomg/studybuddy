from app.models import Article, Section, Snippet
from app import db


def save_article(data):
    # TODO get url instead of title
    existing = Article.query.filter_by(url=data.title).first()
    if existing:
        return existing  # TODO get revision number
    else:
        # create new
        new_article = Article(url=data.url, revision=data.revision_id)
        db.session.add(new_article)
        db.session.commit()
        save_sections(new_article.id, data.sections)

    return new_article


def save_sections(article_id, sections):
    # loop over each section <str>, save with foreignkey to article id
    for section in sections:
        name = section.title
        content = section.full_text()
        existing = Section.query.filter_by(source=article_id, name=section).first()
        if existing:
            # todo
            pass
        else:
            # create new
            new_section = Section(name=section, source=article_id, content=content)
            db.session.add(new_section)
            db.session.commit()
