# 🛒 MERN E-Commerce Platform (Admin + Customer System)

A full-stack **MERN e-commerce web application** with separate **Admin Panel** and **Customer Frontend**, built for scalability, performance, and real-world production use cases.

---

## 🚀 Live Demo

- 🛍️ Customer App: https://your-client-vercel-link.com  
- 🧑‍💼 Admin Panel: https://your-admin-vercel-link.com  
- ⚙️ Backend API: https://your-render-backend-link.com  

---

## 🧠 Project Overview

This project is a **role-based e-commerce system** with two independent frontend applications:

### 👤 Customer Side
- Browse products
- Add to cart
- Secure checkout system
- Stripe payment integration
- View order history

### 🧑‍💼 Admin Side
- Product management (CRUD)
- Order management
- Image upload via Cloudinary

---

## 🏗️ Architecture

- **Frontend (Customer)** → React.js (Vercel)
- **Frontend (Admin)** → React.js (Vercel)
- **Backend API** → Node.js + Express.js (Render)
- **Database** → MongoDB Atlas


---

## 🛠️ Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Axios
- React Router

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- REST API Architecture

### Integrations / Services
- MongoDB Atlas (Database)
- Stripe (Payments)
- Cloudinary (Image Hosting)
- Vercel (Frontend Deployment)
- Render (Backend Deployment)

---

## 📁 Backend Folder Structure
backend/
├── controllers/
├── routes/
├── models/
├── config/
├── middleware/
├── server.js
---

## 🔐 Environment Variables

Create a `.env` file in the backend root:

```env
PORT=3000

FRONTEND_URL_ADMIN=http://localhost:5174
FRONTEND_URL_CLIENT=http://localhost:5173

MONGODB_URI=mongodb://127.0.0.1:27017

CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret
CLOUDINARY_NAME=your_cloudinary_cloud_name

JWT_SECRET=your_jwt_secret

ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=your_admin_password

STRIPE_SECRET_KEY=your_stripe_secret_key
