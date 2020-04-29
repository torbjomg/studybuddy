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