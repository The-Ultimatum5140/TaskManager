#  Team Task Manager (Full-Stack)

A full-stack web application that allows users to create projects, assign tasks, and track progress with **role-based access control (Admin/Member)**.

---

## 🌐 Live Demo

🔗 [Live App](https://your-live-url.com)

---

##  GitHub Repository

🔗 [GitHub Repo](https://github.com/The-Ultimatum5140/TaskManager)

---

##  Features

###  Authentication

* User Signup & Login
* JWT-based authentication
* Secure password hashing (bcrypt)

---

###  Project & Team Management

* Admin can create projects
* Add team members to projects
* View all assigned projects

---

### Task Management

* Create tasks under projects
* Assign tasks to users
* Update task status (todo / in-progress / done)
* Track task ownership

---

### 📊 Dashboard

* Total tasks count
* Completed tasks
* Pending tasks
* Overdue tasks

---

### Role-Based Access Control

* **Admin**

  * Create projects
  * Assign tasks
* **Member**

  * View assigned tasks
  * Update task status

---

##  Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication

---

## API Endpoints

###  Auth

* `POST /api/auth/signup`
* `POST /api/auth/login`

###  Projects

* `POST /api/projects` (Admin only)
* `GET /api/projects`

###  Tasks

* `POST /api/tasks`
* `GET /api/tasks/:projectId`
* `PATCH /api/tasks/:id`

###  Dashboard

* `GET /api/dashboard`

---

##  How It Works

1. User signs up / logs in
2. Admin creates a project
3. Tasks are created and assigned to users
4. Users update task status
5. Dashboard reflects real-time task progress

---

##  Setup Instructions

### 1️ Clone the repository

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

---

### 2️⃣ Backend setup

```bash
cd backend
npm install
```

Create `.env` file:

```env
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
PORT=5000
```

Run backend:

```bash
npm run dev
```

---

### Frontend setup

```bash
cd frontend
npm install
npm run dev
```

## 🎥 Demo Video

📺 [Watch Demo](https://your-video-link.com)

---

##  Author

**Dipu Gupta**

---

##  Note

This project was built as part of a full-stack assessment to demonstrate backend design, role-based access control, and full-stack integration.

---
