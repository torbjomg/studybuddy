from app.models import Article, Section, Question
from app import db


def save_article(data):
    # TODO get url instead of title
    existing = Article.query.filter_by(url=data.title).first()
    if existing:
        return existing  # TODO get revision number
    else:
        # create new
        attr = data._attributes
        new_article = Article(
            url=attr["fullurl"], revision=attr["lastrevid"], title=data.title
        )
        db.session.add(new_article)
        db.session.commit()
        save_sections(new_article.id, data.sections)
        summary_section = Section(
            name="Summary", source=new_article.id, content=data.summary
        )
        db.session.add(summary_section)
        db.session.commit()

    return new_article


def save_sections(article_id, sections):
    # loop over each section <str>, save with foreignkey to article id
    skip_names = (
        "see also",
        "notes",
        "sources",
        "references",
        "external links",
        "citations",
    )
    for section in sections:
        name = section.title
        if name.lower() in skip_names:
            continue
        content = section.full_text()
        existing = Section.query.filter_by(
            source=article_id, name=section.title
        ).first()
        if existing:
            # todo
            pass
        else:
            # create new
            new_section = Section(name=name, source=article_id, content=content)
            db.session.add(new_section)
            db.session.commit()


def save_question_to_db(data):
    new_question = Question(
        source=data["sectionId"],
        question=data["question"],
        answer=data["answer"],
        alternatives=data["alternatives"],
        start_index=data["start_index"],
        end_index=data["end_index"],
        rating=0,
    )
    db.session.add(new_question)
    db.session.commit()


def get_all_questions():
    # organize questions in json format
    # {article_title: {section_title: question_json}}
    pass
