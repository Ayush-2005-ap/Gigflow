🚀 GigFlow – Mini Freelance Marketplace Platform

GigFlow is a mini freelance marketplace platform built as part of the Full Stack Development Internship Assignment for ServiceHive.
The platform enables clients to post gigs and freelancers to bid on them, with a secure and scalable hiring workflow powered by a modern full-stack architecture.
---


🌐 Live Demo

Frontend: https://gigflow-5zf5.vercel.app

Backend API: https://gigflow-4ohh.onrender.com

--- 
🛠️ Tech Stack
Frontend

React.js (Vite)

Tailwind CSS

Axios

Backend

Node.js

Express.js

MongoDB (Mongoose)

Others

JWT Authentication (HttpOnly Cookies)

RESTful APIs

MongoDB Transactions (Atomic operations)

CORS-secured deployment
---

## ✨ Core Features

### 🔐 Authentication
- Secure user registration and login
- JWT-based authentication with HttpOnly cookies
- Role-flexible system (any user can act as Client or Freelancer)

### 📄 Gig Management
- Create gigs with title, description, and budget
- Browse all open gigs
- Search gigs by title

### 💬 Bidding System
- Freelancers can place bids on gigs
- Clients can view all bids for their gigs

### 🔥 Hiring Workflow (Key Feature)
When a client hires a freelancer:
1. Selected bid is marked as **hired**
2. All other bids are marked as **rejected**
3. Gig status changes from **open → assigned**

> Implemented using **MongoDB transactions** to ensure atomic updates and prevent race conditions.

---

## 📂 Project Structure

GigFlow/
│
├── gigflow-backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js
│   │   ├── controllers/
│   │   │   ├── auth.controller.js
│   │   │   ├── gig.controller.js
│   │   │   └── bid.controller.js
│   │   ├── middleware/
│   │   │   └── auth.middleware.js
│   │   ├── models/
│   │   │   ├── User.js
│   │   │   ├── Gig.js
│   │   │   └── Bid.js
│   │   ├── routes/
│   │   │   ├── auth.routes.js
│   │   │   ├── gig.routes.js
│   │   │   └── bid.routes.js
│   │   └── server.js
│   ├── package.json
│   └── .env.example
│
├── gigflow-frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── api.js
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
│
└── README.md

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
NODE_ENV=production

VITE_API_URL=https://your-backend.onrender.com

git clone https://github.com/Ayush-2005-ap/Gigflow.git
cd Gigflow


cd gigflow-backend
npm install
npm run dev


cd ../gigflow-frontend
npm install
npm run dev


