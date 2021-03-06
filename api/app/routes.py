from flask import request
import wikipediaapi

from app import app, db
from app.models import Article, Section, Question
from app.db_helpers import save_article, save_question_to_db

WIKI_API = wikipediaapi.Wikipedia("en")


@app.route("/wiki_search", methods=["POST"])
def wiki_search():
    data = request.get_json()
    search_term = data.get("searchTerm")
    # TODO : cache should actually be redis
    article = Article.query.filter_by(url=search_term).first()

    if article:
        print("fetching cached data")
        section = Section.query.filter_by(source=article.id, name="Summary").first()
    else:
        print("fetching from wikipedia")
        page = WIKI_API.page(search_term)
        if not page.exists():
            return {}

        article = save_article(data=page)
        section = Section.query.filter_by(source=article.id, name="Summary").first()
        summary = page.summary

    all_sections = [
        {"id": s.id, "title": s.name}  #  send content too? TODO
        for s in Section.query.filter_by(source=article.id).all()
    ]
    results = {
        "summary": section.content,
        "sectionId": section.id,
        "articleId": section.source,
        "sections": all_sections,
    }
    return results


@app.route("/save_question", methods=["POST"])
def save_question():
    data = request.get_json()
    try:
        save_question_to_db(data)
        return {
            "success": True,
            "startIndex": data["start_index"],
            "endIndex": data["end_index"],
        }
    except Exception as exc:  # TODO exception types
        return {"success": False, "exception": str(exc)}


@app.route("/get_section_contents", methods=["POST"])
def get_section_contents():
    data = request.get_json()
    section = Section.query.filter_by(id=data["sectionId"]).first()
    if not section:
        # TODO
        return {}
    else:
        return {
            "name": section.name,
            "content": section.content,
            "source": section.source,
        }


@app.route("/get_saved_topics", methods=["POST"])
def get_saved_topics():
    # retrieve article names
    data = request.get_json()
    articles = Article.query.all()
    return {"titles": [a.title for a in articles]}


@app.route("/get_questions", methods=["POST"])
def get_questions():
    data = request.get_json()
    questions = Question.query.all()
    # terrible way of getting article, send article id from react instead ( TODO )
    section_ids = {s.source for s in questions}
    article_ids = set()
    sections = []
    for section_id in section_ids:
        section = Section.query.filter_by(id=section_id).first()
        sections.append(section)
        article_ids.add(section.source)

    result = {
        "questions": [s.jsonify for s in questions],
        "topics": list({s.name for s in sections}),
    }
    return result
