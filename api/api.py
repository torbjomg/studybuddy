from app import app, db
from app.models import Article, Category, Content, Snippet
import wikipedia
from flask import Flask, request


@app.shell_context_processor
def make_shell_context():
    return {
        "db": db,
        "Article": Article,
        "Category": Category,
        "Content": Content,
        "Snippet": Snippet,
    }
