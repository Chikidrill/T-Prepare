@echo off
:: Проверяем, доступен ли Python
where python
IF %ERRORLEVEL% NEQ 0 (
    echo Python не найден в PATH. Убедитесь, что Python установлен и добавлен в PATH.
    pause
    exit /b
)

:: Создаем виртуальное окружение
echo Создание виртуального окружения...
python -m venv venv
IF %ERRORLEVEL% NEQ 0 (
    echo Ошибка при создании виртуального окружения.
    pause
    exit /b
)

:: Активируем виртуальное окружение
call venv\Scripts\activate
IF %ERRORLEVEL% NEQ 0 (
    echo Ошибка при активации виртуального окружения.
    pause
    exit /b
)

:: Устанавливаем зависимости
echo Установка зависимостей...
python -m pip install --upgrade pip
python -m pip install fastapi uvicorn sqlalchemy passlib[bcrypt] python-jose
IF %ERRORLEVEL% NEQ 0 (
    echo Ошибка при установке зависимостей.
    pause
    exit /b
)

:: Запускаем сервер
echo Запуск сервера...
uvicorn main:app --reload
IF %ERRORLEVEL% NEQ 0 (
    echo Ошибка при запуске сервера.
    pause
    exit /b
)
