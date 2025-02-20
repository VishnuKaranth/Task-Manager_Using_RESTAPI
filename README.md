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

## 🖼️ Screenshots
### 🔹 Login Page
![Home Page](![image](https://github.com/user-attachments/assets/58139e87-58df-442a-947a-4f239868d3ab)
)

### 🔹 Register Page
![Task List](![image](https://github.com/user-attachments/assets/0f130168-43bc-467b-a8a4-dfa8e63c7fe2)
)

### 🔹 Dashboard
![image](https://github.com/user-attachments/assets/5ffe2959-08eb-45b7-8ad4-4f4005dc4adb
)
)

### 🔹 Add New Task
![Add Task](![image](https://github.com/user-attachments/assets/bd0432ea-18da-4ec2-befe-067ef70ef71a)
)

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
node server.js
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

---
Made with ❤️ by Vishnu Karanth, Sanjana R, Sanjana T S & Sharath P.

