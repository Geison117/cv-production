from sqlalchemy import Column, Integer, String, Boolean, TIMESTAMP, text
from sqlalchemy.orm import declarative_base


Base = declarative_base()

class Usuario(Base):
    __tablename__ = "usuarios"

    id = Column(Integer, primary_key=True, index=True)
    nombre = Column(String(100), nullable=False)
    email = Column(String(150), unique=True, nullable=False)
    password_hash = Column(String, nullable=False)
    is_active = Column(Boolean, server_default="true")
    created_at = Column(
        TIMESTAMP,
        server_default=text("CURRENT_TIMESTAMP")
    )
