from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker


SQLALCHEMY_DATABASE_URL = 'postgresql://postgress:VekZluHsEvRaNDrz5dCw6lDe8qEeEiR1@dpg-d69e42p4tr6s73cjuf20-a.oregon-postgres.render.com/resume_iv9u'

engine = create_engine(SQLALCHEMY_DATABASE_URL)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()