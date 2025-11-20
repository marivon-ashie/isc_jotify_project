import os

class Config:
    SQLALCHEMY_DATABASE_URI = "postgresql://postgres:454678@localhost:5432/jotify_db"
    SQLALCHEMY_TRACK_MODIFICATIONS = False