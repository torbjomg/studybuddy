import wikipedia
from flask import Flask, request

app = Flask(__name__)


@app.route("/wiki_search", methods=["POST"])
def wiki_search():
    data = request.get_json()
    search_term = data.get("searchTerm")
    search_results = wikipedia.search(search_term)
    page = wikipedia.page(search_results[0])

    results = {
        "searchResults": search_results,
        "returnedItem": search_results[0],
        "summary": page.summary,
        "chapters": page.categories,
        "full_content": page.content,  # temporary, split into categories
    }

    return results


@app.route("/get_category", methods=["POST"])
def get_category():
    data = request.get_json()
    page_name = data.get("pageName")
    category = data.get("category")
    # todo : redis cache pages
    # for now re-request from wiki
    page = wikipedia.page(page_name)
    assert category in page.categories
    # startindex of category
    start_tag = f"=== {category} ==="
    start_index = page.content.find(start_tag) + len(start_tag)
    end_index = page.content.find("\n==", start_index)
    category_content = page.content[start_index:end_index]
    return {
        "category": category,
        "content": category_content,
    }
