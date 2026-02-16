# config.py
import os
from pydantic_settings import BaseSettings
from dotenv import load_dotenv


load_dotenv()

class Settings(BaseSettings):
    APP_ENV: str = os.getenv("APP_ENV")
    DATABASE_URL: str = os.getenv("DATABASE_URL")
    SECRET_KEY: str = os.getenv("SECRET_KEY")
    DEBUG: bool = os.getenv("DEBUG")
    FRONTEND_URL: str = os.getenv("FRONTEND_URL")     

settings = Settings()
