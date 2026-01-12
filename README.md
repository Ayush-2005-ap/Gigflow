# 🚀 GigFlow – Mini Freelance Marketplace Platform

GigFlow is a mini freelance marketplace platform built as part of the **Full Stack Development Internship Assignment** for **ServiceHive**.  
The platform allows clients to post gigs and freelancers to bid on them, with a complete hiring workflow implemented using secure and atomic backend logic.

---

## 🛠️ Tech Stack

### Frontend
- React.js (Vite)
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)

### Others
- JWT Authentication (HttpOnly Cookies)
- RESTful APIs
- MongoDB Transactions (for atomic hiring logic)

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

