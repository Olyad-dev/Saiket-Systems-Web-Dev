# Task-5: Database Integration with MySQL

This project demonstrates connecting a REST API to a MySQL database to store and retrieve book data (name, email, age).

## Setup Instructions

1. **Install MySQL**:

   - Download from [mysql.com](https://dev.mysql.com/downloads/mysql/).
   - Install and set a root password.

2. **Create Database**:

   - Open MySQL command line or MySQL Workbench.
   - Run: `CREATE DATABASE task5_db;`

3. **Create Table**:

   - In the same session, run:
    CREATE DATABASE saiket_db;
USE saiket_db;

CREATE TABLE books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(100),
    published_year INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


4. **Install Dependencies**:

   - Run `npm install`

5. **Configure Environment**:

   - Update `.env` with your MySQL credentials (password, etc.).

6. **Run the Server**:
   - `npm start`
   - Server will log "Connected to MySQL database!" if successful.

## API Endpoints

- GET /api/books: Get all books
- POST /api/books: Create book 
- PUT /api/books/:id: Update book
- DELETE /api/books/:id: Delete book

Test with Postman or curl.
