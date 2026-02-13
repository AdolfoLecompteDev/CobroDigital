import os
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv

load_dotenv()

# Prioridad 1: Variable de entorno de Render (Production)
# Prioridad 2: Configuración local de MySQL
SQLALCHEMY_DATABASE_URL = os.getenv(
    "DATABASE_URL", 
    "mysql+pymysql://root:Clave1234@localhost:3306/cobrodigital"
)

# Ajustes de conexión para producción (MySQL/PostgreSQL)
engine = create_engine(
    SQLALCHEMY_DATABASE_URL,
    pool_pre_ping=True,  # Verifica si la conexión sigue viva antes de usarla
    pool_recycle=3600,   # Refresca las conexiones cada hora para evitar timeouts
    pool_size=10,        # Número de conexiones simultáneas permitidas
    max_overflow=20      # Conexiones extra si hay mucho tráfico
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()