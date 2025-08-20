# Country & User Calendar API #  

### REST API на NestJS для работы с информацией о странах и пользовательским календарём с праздниками. ###  

## Функции  

# Country:  
-Получение списка доступных стран  

-GET /countries  

## Получение информации о стране по коду  

-GET /countries/:countryCode  

## User  

Создание пользователя  

POST /users/create  

{
  "email": "user@example.com"  
}

-Получение календаря пользователя  

-GET /users/:userId/calendar  

Добавление праздников в календарь пользователя  
POST /users/:userId/calendar/holidays  

{
  "countryCode": "US",  
  "years": 2025,  
  "holidays": [  
    { "name": "New Year", "date": "2025-01-01" }  
  ]  
}  

⚙️ Установка и запуск локально  

Клонируем репозиторий:  

git clone <your-repo-url>  
cd <your-project-folder>  


Устанавливаем зависимости:  

npm install  


Генерируем Prisma Client:  

npx prisma generate  


Выполняем миграции (если есть):  
  
npx prisma migrate deploy  


Запускаем локально в режиме разработки:  

npm run start:dev  


Приложение будет доступно по: http://localhost:5000  

 Запуск через Docker  

Сборка контейнера:  

docker-compose build  


Запуск контейнеров:  

docker-compose up  


# Контейнеры:  #

API: http://localhost:5000  

PostgreSQL: порт 5432  

При первом запуске убедитесь, что база данных пустая и выполнена генерация Prisma Client.  

Структура проекта  
src/  
├── country/  
│   ├── country.controller.ts  
│   └── country.service.ts  
├── user/  
│   ├── user.controller.ts  
│   └── user.service.ts  
├── calendar/  
├── external-api/  

# Переменные окружения #  

DATABASE_URL – строка подключения к PostgreSQL  

NODE_ENV – окружение (development или production)  

Пример .env:  

DATABASE_URL="postgresql://postgres:postgres@db:5432/country_db?schema=public"  

NODE_ENV=development  

# Полезные команды #

npm run start:dev – запуск в режиме разработки  

npm run build – сборка проекта  


npm run start:prod – запуск продакшн версии  


