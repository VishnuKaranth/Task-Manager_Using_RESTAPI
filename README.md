# Task Management Application

## 📌 Project Overview
This is a **Task Management Application** built using the **MERN stack** (MongoDB, ExpressJS, ReactJS, NodeJS). It allows users to manage their tasks efficiently with authentication, task categorization, and real-time updates. It also follows the principles of **RESTful API** for seamless communication between the frontend and backend.

## 🚀 Features
- User Authentication (JWT-based login/signup)
- Create, Read, Update, and Delete (CRUD) tasks
- Mark tasks as **completed**
- Categorize tasks with labels
- Responsive UI with **ReactJS**
- Secure backend using **ExpressJS & MongoDB**
- RESTful API architecture

## 🛠️ Tech Stack
- **Frontend:** ReactJS, Redux (for state management)
- **Backend:** NodeJS, ExpressJS
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)

## 🔧 Installation
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/VishnuKaranth/Task-Manager_Using_RESTAPI.git
cd Task-Manager_Using_RESTAPI
```

### 2️⃣ Install Dependencies
#### Backend:
```sh
cd backend
npm install
```

#### Frontend:
```sh
cd frontend
npm install
```

### 3️⃣ Set Up Environment Variables
Create a **.env** file in the `backend` folder and add:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

### 4️⃣ Start the Application
#### Start Backend:
```sh
cd backend
nodemon server.js
```

#### Start Frontend:
```sh
cd frontend
npm start
```

## 🎯 Usage
1. Sign up or log in.
2. Create a new task with a title & description.
3. Edit or delete tasks anytime.
4. Mark tasks as **completed** when done.

## 🔗 API Endpoints
| Method | Endpoint       | Description         |
|--------|---------------|---------------------|
| POST   | `/api/auth/signup` | User Signup |
| POST   | `/api/auth/login`  | User Login |
| GET    | `/api/tasks`       | Get all tasks |
| POST   | `/api/tasks`      | Create a new task |
| PUT    | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |

## 🤝 Contributing
Feel free to contribute! Fork the repository, create a new branch, and submit a pull request.

## 📜 License
This project is licensed under the **MIT License**.

---
Made with ❤️ by Vishnu Karanth,Sharath P,Sanjana R and Sanjana T S.

