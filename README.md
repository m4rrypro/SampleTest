# Sample Project

This project demonstrates a multi-stage Docker setup for a React application served with Nginx, alongside running Adminer and PostgreSQL in a Docker Compose environment. It includes instructions on how to set up and run the application.

## Project Structure
sample/
├── backend/
│ ├── app.js
│ ├── Dockerfile
│ ├── package.json
│ ├── package-lock.json
│ └── .env
├── web/
│ ├── public/
│ ├── src/
│ ├── Dockerfile
│ ├── nginx.conf
│ └── .env
├── docker-compose.yml
└── README.md

## Prerequisites

- Docker
- Docker Compose
- Node.js

## Setup Instructions

### Step 1: Clone the Repository

```sh
git clone https://github.com/m4rrypro/SampleTest.git
cd sample
```

### Step 2: Environment Variables
Create a .env file in the backend and web directories with the following variables:

#### For backend/.env:

- DATABASE_URL
- PORT
#### For web/.env:
- REACT_APP_API_URL
### Step 3: Build and Run with Docker Compose
Ensure Docker and Docker Compose are installed and running on your system. Then, run the following command to build and start the services:
```sh
docker-compose up --build
```
### Step 4: Access the Application
- React App: http://localhost:80
- Adminer: http://localhost:8081
- Backend API: http://localhost:4000

### Running Migrations
To run migrations for the backend, use the docker exec command to access the backend container and run your migration script.

### Contribution
Feel free to fork this project, make improvements, and submit pull requests. Any contributions are welcome!

### License
This project is licensed under the MIT License. See the LICENSE file for details.

### Author
[Muhammad Umair Ali](https://github.com/m4rrypro)
