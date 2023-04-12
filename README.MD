## Introduction

The library-backend repository is a project aimed at creating a backend API for a library management system. The project is built using Node.js and the Express framework, with a MongoDB database for storing data.
## Getting Started

To get started with the library-backend project, you will need to have Node.js and MongoDB installed on your machine. You can download Node.js from the official website ([https://nodejs.org/](https://nodejs.org/) ) and MongoDB from the MongoDB website ([https://www.mongodb.com/](https://www.mongodb.com/) ).

Once you have Node.js and MongoDB installed, you can clone the repository using the following command:

```bash

git clone https://github.com/SaratAngajalaoffl/library-backend.git
```



After cloning the repository, navigate to the project directory and install the required dependencies using the following command:

```

npm install
```


## Running the Project

To run the project, navigate to the project directory and run the following command:

```sql

npm start
```



This will start the server and the API will be available at `http://localhost:3000`.

## API Documentation

The library management system API has the following endpoints:
### `POST /api/auth/signup`

Creates a new user account.
#### Request Body

```json

{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "password"
}
```


#### Response Body

```json

{
  "id": "5f849e704c937023f882e8f2",
  "name": "John Doe",
  "email": "johndoe@example.com",
  "createdAt": "2020-10-12T06:25:52.582Z",
  "updatedAt": "2020-10-12T06:25:52.582Z"
}
```


### `POST /api/auth/login`

Logs in a user.
#### Request Body

```json

{
  "email": "johndoe@example.com",
  "password": "password"
}
```


#### Response Body

```json

{
  "accessToken": "your_access_token",
  "expiresIn": 3600
}
```


### `GET /api/books`

Gets a list of all books.
#### Response Body

```json

[
  {
    "id": "5f84a10fc6e32b59c00112cf",
    "title": "The Hitchhiker's Guide to the Galaxy",
    "author": "Douglas Adams",
    "createdAt": "2020-10-12T07:14:55.743Z",
    "updatedAt": "2020-10-12T07:14:55.743Z"
  },
  {
    "id": "5f84a1b1c6e32b59c00112d0",
    "title": "1984",
    "author": "George Orwell",
    "createdAt": "2020-10-12T07:18:25.272Z",
    "updatedAt": "2020-10-12T07:18:25.272Z"
  }
]
```

### `POST /api/books`

Adds a new book.

#### Request Body

```json
{
  "title": "The Catcher in the Rye",
  "author": "J.D. Salinger",
  "publishedYear": 1951
}
```


#### Response Body

```json

{
  "id": "5f84a2bdc6e32b59c00112d1",
  "title": "The Catcher in the Rye",
  "author": "J.D. Salinger",
  "publishedYear": 1951,
  "createdAt": "2020-10-12T07:22:05.958Z",
  "updatedAt": "2020-10-12T07:22:05.958Z"
}
```


### `GET /api/books/:id`

Gets a book by ID.
#### Response Body

```json

{
  "id": "5f84a2bdc6e32b59c00112d1",
  "title": "The Catcher in the Rye",
  "author": "J.D. Salinger",
  "publishedYear": 1951,
  "createdAt": "2020-10-12T07:22:05.958Z",
  "updatedAt": "2020-10-12T07:22:05.958Z"
}
```


### `PUT /api/books/:id`

Updates a book by ID.
#### Request Body

```json

{
  "title": "The Catcher in the Rye",
  "author": "J.D. Salinger",
}
```


#### Response Body

```json

{
  "id": "5f84a2bdc6e32b59c00112d1",
  "title": "The Catcher in the Rye",
  "author": "J.D. Salinger",
  "createdAt": "2020-10-12T07:22:05.958Z",
  "updatedAt": "2020-10-12T07:24:37.118Z"
}
```


### `DELETE /api/books/:id`

Deletes a book by ID.
#### Response Body

```json

{
  "id": "5f84a2bdc6e32b59c00112d1",
  "title": "The Catcher in the Rye",
  "author": "J.D. Salinger",
  "createdAt": "2020-10-12T07:22:05.958Z",
  "updatedAt": "2020-10-12T07:24:37.118Z"
}
```


## Authentication

The library management system API uses JWTs for authentication. To authenticate a user, the client needs to send a POST request to `/api/auth/login` with the user's email and password. If the email and password are correct, the server will send a response with a JWT access token.

To access protected endpoints, the client needs to send the access token in the `Authorization` header of the request. The header should look like this:

```makefile

Authorization: Bearer <your_access_token>
```



If the access token is valid, the server will grant access to the endpoint.
## Data Storage

The library management system API uses MongoDB for data storage. The data models are defined using [Mongoose](https://mongoosejs.com/) , a MongoDB object modeling tool designed to work in an asynchronous environment

## Error Handling

The library-backend project provides error handling for all API endpoints. If an error occurs, the server will return an error response with a status code and an error message.

Here are some common error responses:

* 400 Bad Request: Invalid request parameters
* 401 Unauthorized: Invalid authentication credentials
* 404 Not Found: Resource not found
* 500 Internal Server Error: Server error

## Deployment

The library-backend repository can be deployed on any platform that supports Node.js and MongoDB. Here are the steps for deploying the project:
1. Clone the repository onto your server:

```bash

git clone https://github.com/SaratAngajalaoffl/library-backend.git
```


1. Install the project dependencies:

```

npm install
```

 
1. Create a `.env` file and set the following environment variables:

```makefile

NODE_ENV=development
PORT=3000
MONGODB_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
```


1. Start the server:

```sql

npm start
```


1. Test the API endpoints using a tool like Postman or cURL.

## Conclusion

The library-backend repository is a project aimed at creating a backend API for a library management system. The project provides API endpoints for managing books and users, as well as user authentication using JSON Web Tokens (JWT). The project is built using Node.js and the Express framework, with a MongoDB database for storing data. With this documentation, you should have a good understanding of how to get started with the project and how to use the API endpoints. 

## License

The library-backend repository is licensed under the MIT License. You are free to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the project. See the `LICENSE` file for more details.

## References 
- [Node.js documentation](https://nodejs.org/en/docs/) 
- [Express documentation](https://expressjs.com/en/api.html) 
- [MongoDB documentation](https://docs.mongodb.com/) 
- [JSON Web Token documentation](https://jwt.io/introduction/) 
- [Postman documentation](https://learning.postman.com/docs/getting-started/introduction/)
