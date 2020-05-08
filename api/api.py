from app import app, db
from app.models import Article, Section, Question

from flask import Flask, request


@app.shell_context_processor
def make_shell_context():
    return {
        "db": db,
        "Article": Article,
        "Section": Section,
        "Question": Question,
    }
