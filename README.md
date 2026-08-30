# FoodieDude 🍔

A full-stack food ordering web application built with the MERN stack (MongoDB, Express, React, Node.js). The project consists of three separate apps: a customer-facing **frontend**, an **admin** dashboard for managing food items and orders, and a **backend** REST API.

## Features

- Browse food items by category with search/filter
- User signup/login with JWT authentication
- Add to cart, update quantities, and checkout
- Stripe-based payment/checkout flow
- Order placement and order history ("My Orders")
- Admin dashboard to add, list, and remove food items
- Admin dashboard to view and update order status
- Image upload for food items (Multer)

## Tech Stack

**Frontend & Admin**
- React 19 + Vite
- React Router DOM
- Axios
- React Icons / React Toastify (admin)

**Backend**
- Node.js + Express 5
- MongoDB + Mongoose
- JWT (jsonwebtoken) for authentication
- bcrypt for password hashing
- Multer for file uploads
- Stripe for payments
- dotenv, cors, validator

## Project Structure

```
FoodieDude-Website-main/
├── frontend/       # Customer-facing React app
├── admin/          # Admin dashboard React app
└── backend/        # Express REST API
    ├── config/         # DB connection
    ├── controllers/    # Route logic (food, user, cart, order)
    ├── middleware/      # Auth middleware
    ├── models/          # Mongoose schemas (food, user, order)
    ├── routes/          # API route definitions
    ├── uploads/         # Uploaded food images
    └── server.js        # App entry point
```

## Prerequisites

- Node.js (v18+ recommended)
- npm
- A MongoDB database (local or MongoDB Atlas)
- A Stripe account (for payment/checkout functionality)

## Setup & Installation

### 1. Clone the repository

```bash
git clone <repo-url>
cd FoodieDude-Website-main
```

### 2. Backend

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory with the following variables:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
```

Run the backend (defaults to `http://localhost:4000`):

```bash
npm run server
```

### 3. Frontend

```bash
cd frontend
npm install
npm run dev
```

### 4. Admin Panel

```bash
cd admin
npm install
npm run dev
```

Each React app runs on its own Vite dev server port (shown in the terminal after `npm run dev`).

## API Endpoints

Base URL: `http://localhost:4000`

| Route          | Description                          |
|----------------|---------------------------------------|
| `/api/food`    | Add, list, and remove food items      |
| `/api/user`    | User registration and login           |
| `/api/cart`    | Add, remove, and fetch cart data      |
| `/api/order`   | Place orders, verify payment, order history/status |
| `/images`      | Static serving of uploaded food images |

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
