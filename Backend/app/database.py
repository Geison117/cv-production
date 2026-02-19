from sqlalchemy import create_engine
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from .config import settings
from typing import AsyncGenerator
from app.database import AsyncSessionLocal
from . import models, schemas

SQLALCHEMY_DATABASE_URL = settings.DATABASE_URL.replace(
    "postgres://",
    "postgresql+asyncpg://"
) #'postgresql://postgress:VekZluHsEvRaNDrz5dCw6lDe8qEeEiR1@dpg-d69e42p4tr6s73cjuf20-a.oregon-postgres.render.com/resume_iv9u'

engine = create_async_engine(SQLALCHEMY_DATABASE_URL, echo=True)

SessionLocal = sessionmaker(
    engine,
    class_=AsyncSession,
    expire_on_commit=False,
    )

async def get_db() -> AsyncGenerator:
    async with AsyncSessionLocal() as session:
        yield session


async def init_db():
    async with engine.begin() as conn:
        await conn.run_sync(models.Base.metadata.create_all)