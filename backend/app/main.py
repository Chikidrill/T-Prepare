from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from . import models, database, auth

# Создаем экземпляр приложения FastAPI
app = FastAPI()

# Добавляем поддержку CORS
origins = [
    "http://localhost:5173", "https://extraordinary-malasada-46eafc.netlify.app"  # разрешаем запросы с этого фронтенд-хоста
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "https://extraordinary-malasada-46eafc.netlify.app"],  # Разрешаем только твой фронтенд
    allow_credentials=True,
    allow_methods=["*"],  # Разрешаем все методы (GET, POST, PUT и т.д.)
    allow_headers=["*"],  # Разрешаем все заголовки
)

# Подключаем роуты
app.include_router(auth.router)

# Создаем все таблицы в БД
models.Base.metadata.create_all(bind=database.engine)
