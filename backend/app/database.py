from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# SQLite вместо SQL Server
DATABASE_URL = "sqlite:///./test.db"  # изменено на SQLite

engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})  # параметр для SQLite
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()
