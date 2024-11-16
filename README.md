<div align="center">
   <h1>Authentication App 🚀</h1>
   <p>A full-stack application with login and signup features.</p>
</div>

<div align="center">
   <h2><strong>Built with</strong></h2>
   <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js"/>
   <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React"/>
   <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"/>
   <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"/>
   <img src="https://img.shields.io/badge/Express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="Express"/>
   <img src="https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma ORM"/>
   <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL"/>
   <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" alt="JWT"/>
   <img src="https://img.shields.io/badge/Bcrypt-00599C?style=for-the-badge&logo=gnubash&logoColor=white" alt="Bcrypt"/>
   <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" alt="Axios"/>
</div>

---

### 📖 About The Project

This project is a simple yet functional **Login/Signup** application made with **React** for the frontend and **Node.js** with **Express** for the backend. It uses **PostgreSQL** as the database and **Prisma ORM** for database management. Passwords are securely hashed with **Bcrypt** and authentication is managed via **JWT (JSON Web Tokens)**.

The main goal is to demonstrate a full-stack implementation with secure user authentication!
If you like it, take a look at my profile and follow me.

---

### 📷 Preview

https://github.com/user-attachments/assets/11285eb4-0088-42e1-a6d3-e773132e18b9

---
### 🚀 Demo

<a href="https://authenticationapp-diogosimao.netlify.app/" target="_blank"> <img src="https://img.shields.io/badge/%20Live%20Demo-007bff?style=for-the-badge&logo=rocket&logoColor=white" alt="Live Demo Button"/> </a>

---

### ✨ Features

- User registration and login
- Secure password hashing with Bcrypt
- Authentication using JWT
- UI with CSS
- Integration with PostgreSQL using Prisma ORM

---

### 📫 How to Reach Me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/diogosimaosilva)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/DiogoSimaoPT)

---

### 🛠️ Installation

To run this project locally, follow these steps:

#### Prerequisites

- Node.js (v16 or higher)
- PostgreSQL
- npm or yarn

### Install Dependencies

On each folder

```
npm install
or
yarn install
```

### Create a .env file in the root of your project with the following content:

On API

```
DATABASE_URL=postgresql://user:password@localhost:5432/database
JWT_SECRET=your_jwt_secret
```

### Migrate the Database

On API

```
npx prisma migrate dev
```

### Start the Application

On FrontEnd

```
npm run dev
or
yarn dev
```
