import os
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv

# Cargamos las variables del archivo .env
load_dotenv()

# Intentamos leer la variable 'DATABASE_URL' del servidor.
# Si no existe (como en tu PC local), usamos la cadena de texto de localhost por defecto.
SQLALCHEMY_DATABASE_URL = os.getenv(
    "DATABASE_URL", 
    "mysql+pymysql://root:Clave1234@localhost:3306/cobrodigital"
)

# El pool_pre_ping ayuda a evitar errores de "conexión perdida" comunes en MySQL
engine = create_engine(
    SQLALCHEMY_DATABASE_URL,
    pool_pre_ping=True
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()