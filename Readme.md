# Country & User Calendar API #  

### REST API на NestJS для работы с информацией о странах и пользовательским календарём с праздниками. ###  

## Функции:

# Country:  
### Получение списка доступных стран:  
-GET /countries  

### Получение информации о стране по коду:  

-GET /countries/:countryCode  

## User  

### Создание пользователя  

POST /users/create  

{  
  "email": "user@example.com"    
}  

### Получение календаря пользователя  

-GET /users/:userId/calendar  

### Добавление праздников в календарь пользователя  

POST /users/:userId/calendar/holidays  

{
  "countryCode": "US",  
  "years": 2025,  
  "holidays": [  
    { "name": "New Year", "date": "2025-01-01" }  
  ]  
}  

## Установка и запуск локально:  

1. Клонируем репозиторий:  

- git clone https://github.com/Septors/Country-info-api.git 
- cd Country-info-api  


 2. Устанавливаем зависимости:  

- npm install  


3. Генерируем Prisma Client:  

-npx prisma generate  

4. Выполняем миграции (если есть):  
  
npx prisma migrate deploy  


5. Запускаем локально в режиме разработки:  

npm run start:dev  


Приложение будет доступно по: http://localhost:5000  

## Запуск через Docker  

1. Сборка контейнера:  

-docker-compose build  


2. Запуск контейнеров:  

-docker-compose up  


## Контейнеры:  ##

Контейнеры будут доступны по адресам:

API: http://localhost:5000

PostgreSQL: порт 5432

При первом запуске убедитесь, что база данных пуста и выполнена генерация Prisma Client.

### Структура проекта  
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

Пример .env:  

DATABASE_URL="postgresql://postgres:postgres@db:5432/country_db?schema=public"  


# Полезные команды #

- npm run start:dev – запуск в режиме разработки  

- npm run build – сборка проекта  

- npm run start:prod – запуск продакшн версии

- 




