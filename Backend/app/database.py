import ssl
from sqlalchemy import create_engine
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from .config import settings
from typing import AsyncGenerator
from . import models, schemas

SQLALCHEMY_DATABASE_URL = settings.DATABASE_URL.replace(
    "postgres://",
    "postgresql+asyncpg://"
) #'postgresql://postgress:VekZluHsEvRaNDrz5dCw6lDe8qEeEiR1@dpg-d69e42p4tr6s73cjuf20-a.oregon-postgres.render.com/resume_iv9u'


SQLALCHEMY_DATABASE_URL = SQLALCHEMY_DATABASE_URL.split("?sslmode")[0]


# ✅ contexto SSL compatible con Vercel
ssl_context = ssl.create_default_context()
ssl_context.check_hostname = False
ssl_context.verify_mode = ssl.CERT_NONE

engine = create_async_engine(SQLALCHEMY_DATABASE_URL, echo=False,  pool_pre_ping=True,
    pool_recycle=300, connect_args={"ssl": ssl_context})

SessionLocal = sessionmaker(
    engine,
    class_=AsyncSession,
    expire_on_commit=False,
    )

async def get_db() -> AsyncGenerator:
    async with SessionLocal() as session:
        yield session


async def init_db():
    async with engine.begin() as conn:
        await conn.run_sync(models.Base.metadata.create_all)