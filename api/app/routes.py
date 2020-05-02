from flask import request
import wikipediaapi

from app import app, db
from app.models import Article, Section, Snippet
from app.db_helpers import save_article

WIKI_API = wikipediaapi.Wikipedia("en")


@app.route("/wiki_search", methods=["POST"])
def wiki_search():
    data = request.get_json()
    search_term = data.get("searchTerm")
    cached = Article.query.filter_by(url=search_term).first()

    if cached:
        print("fetching cached data")
        summary = Section.query.filter_by(
            source=cached.id, name="Summary").first().content
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
