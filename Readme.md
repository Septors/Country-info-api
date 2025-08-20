# Country & User Calendar API #  

### REST API on NestJS for working with country information and a custom calendar with holidays. ###  

## Functions:

# Country:  
### Getting a list of available countries:  
-GET /countries  

### Getting country information by code:  

-GET /countries/:countryCode  

## User  

### Creating a user  

POST /users/create  

{  
  "email": "user@example.com"    
}  

### Getting a user's calendar  

-GET /users/:userId/calendar  

### Adding holidays to a user's calendar  

POST /users/:userId/calendar/holidays  

{
  "countryCode": "US",  
  "years": 2025,  
  "holidays": [  
    { "name": "New Year", "date": "2025-01-01" }  
  ]  
}  

## Install and run locally:  

1. Clone the repository:  

- git clone https://github.com/Septors/Country-info-api.git 
- cd Country-info-api  


 2. Installing dependencies:  

- npm install  


3. Generating Prisma Client:  

-npx prisma generate  

4. Perform migrations (if any):  
  
- npx prisma migrate deploy  


5. Run locally in development mode:  

- npm run start:dev  


The application will be available on: http://localhost:5000  

## Launch via Docker: 

1.Container assembly:  

-docker-compose build  


2. Running containers:  

-docker-compose up  


## Containers:  ##

Containers will be available at the following addresses:

API: http://localhost:5000

PostgreSQL: port 5432

On first run, make sure the database is empty and Prisma Client generation is complete.

### Project structure
src/  
├── country/  
│   ├── country.controller.ts  
│   └── country.service.ts  
├── user/  
│   ├── user.controller.ts  
│   └── user.service.ts  
├── calendar/  
├── external-api/  

# Environment variables #  

DATABASE_URL – PostgreSQL connection string  

Example  .env:  

DATABASE_URL="postgresql://postgres:postgres@db:5432/country_db?schema=public"  


# Useful commands: #

- npm run start:dev – launch in development mode  

- npm run build – building the project  

- npm run start:prod – launch of production version









