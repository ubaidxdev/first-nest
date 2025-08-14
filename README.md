# My Book Collection

A simple NestJS project to manage a personal book collection with full CRUD functionality, local SQLite database integration, and Swagger API documentation.

## **Video Showcase**

Click the video below to see the API in action via Swagger UI:
<video src="./intro.mp4" controls autoplay loop style="width: 100%; max-width: 100%; display: block;"></video>

---

## **Project Description**

My Book Collection is a small but fully functional NestJS application that allows users to:

- Create, read, update, and delete books in their personal collection.
- Validate input using DTOs (`BookDto` and `BookPartialDto`).
- Interact with a local SQLite database using SQL queries.
- Explore and test the API using Swagger UI with all required fields.
- Demonstrate all functionality in a short showcase video.

---

## **Features**

- **CRUD Operations**:
  - `GET /book` → List all books
  - `GET /book/:id` → Retrieve a single book
  - `POST /book` → Add a new book
  - `PATCH /book/:id` → Update an existing book
  - `DELETE /book/:id` → Delete a book

- **Validation**: All incoming requests are validated using DTOs.

- **Local Database**: SQLite is used for storing book records.

- **Swagger Documentation**: Interactive API documentation is available at `/api/docs` route.

- **Video Showcase**: Demonstrates all endpoints in action via Swagger UI.

---

## **Tech Stack**

- **Backend**: NestJS v11 (platform-express v11.1.6)
- **Database**: SQLite (`sqlite3`)
- **Validation**: `class-validator`
- **API Docs**: Swagger (`@nestjs/swagger`)
- **Language**: TypeScript

---

## **Installation & Running**

Clone the repository:

```bash
git clone https://github.com/ubaidxdev/first-nest.git
cd first-nest
```

Install dependencies:

```bash
npm install
```

Run the application in development mode:

```bash
npm run start:dev
```

By default, the app runs at: `http://localhost:3000`

---

## **Swagger API Documentation**

Once the application is running, you can access Swagger UI at:

```
http://localhost:3000/api
```

All endpoints are documented with required fields and example requests.

---

## **Database**

The project uses a local SQLite database (`my_db.db`) stored in the project root. No additional setup is required.

---
