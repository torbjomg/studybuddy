from flask import request
import wikipediaapi

from app import app, db
from app.models import Article, Section, Snippet
from app.db_helpers import save_article, save_snippet_to_db

WIKI_API = wikipediaapi.Wikipedia("en")


@app.route("/wiki_search", methods=["POST"])
def wiki_search():
    data = request.get_json()
    search_term = data.get("searchTerm")
    # TODO : cache should actually be redis
    cached = Article.query.filter_by(url=search_term).first()

    if cached:
        print("fetching cached data")
        summary = (
            Section.query.filter_by(source=cached.id, name="Summary").first().content
        )
        results = {"summary": summary}
    else:
        print("fetching from wikipedia")
        page = WIKI_API.page(search_term)
        if not page.exists():
            return {}

        save_article(data=page)
        results = {
            "summary": page.summary,
        }

    return results


@app.route("/save_snippet", methods=["POST"])
def save_snippet():
    data = request.get_json()
    try:
        save_snippet_to_db(data)
        return {"success": True}
    except Exception as exc:  # TODO exception types
        return {"success": False, "exception": str(exc)}
