# 🔐 Full-Stack Next.js 16 Authentication System

A robust, production-ready authentication system built with **Next.js 16**, **MongoDB**, and **TypeScript**. This project implements a secure "User-First" workflow including Email Verification and JWT-based session management.

---

## 🚀 Key Highlights for Recruiters
* **Modern Tech Stack:** Built using **Next.js 16 (Turbopack)** and **Tailwind CSS v4**, utilizing the latest features in the React ecosystem.
* **Secure Backend:** Implements **Bcrypt.js** for password hashing and **JSON Web Tokens (JWT)** for stateless session management.
* **Database Integration:** Seamlessly integrated with **MongoDB Atlas** using **Mongoose** for schema-based data modeling.
* **Email Workflow:** Automated email verification system using **Nodemailer** and **Mailtrap** for safe testing.
* **Clean Architecture:** Configured TypeScript path mapping (`@models/*`, `@dbConfig/*`) for professional code organization.

---

## 🛠️ Tech Stack
* **Framework:** Next.js 16 (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS v4
* **Database:** MongoDB Atlas (Mongoose ORM)
* **Authentication:** JWT (JSON Web Tokens) & Bcrypt.js
* **Emailing:** Nodemailer & Mailtrap

---

## ✨ Features
* **User Registration:** Sign up with unique usernames and email validation.
* **Email Verification:** Prevents bot sign-ups by requiring users to verify their email via a URL-safe unique token.
* **Secure Login:** Credential-based login with encrypted password comparison.
* **Protected Routes:** Profile and Dashboard access restricted to authenticated users only.
* **Token-based Sessions:** Uses HTTP-only cookies to store JWTs, mitigating XSS attacks.
* **Logout:** Securely clears server-side cookies to end user sessions.

---

## 📸 Project Workflow
1.  **Signup:** User submits details → Password is hashed → User is saved as "unverified" → Verification email is sent.
2.  **Verify:** User clicks unique link → Token is validated against MongoDB → User status updated to "verified."
3.  **Login:** User enters credentials → JWT is generated → Token is stored in an HTTP-only cookie.
4.  **Access:** User visits protected `/profile` page → Middleware/Route Handler validates the cookie.

---

## ⚙️ Environment Variables
To run this project, you will need to add the following environment variables to your `.env` file:

```text
MONGO_URI=your_mongodb_connection_string
TOKEN_SECRET=your_jwt_secret_key
DOMAIN=http://localhost:3000
MAILTRAP_USER=your_mailtrap_username
MAILTRAP_PASS=your_mailtrap_password

🏗️ Getting Started
Clone the repository:

Bash
git clone [https://github.com/lord-amresh/auth-nextjs-youtube.git](https://github.com/lord-amresh/auth-nextjs-youtube.git)
Install dependencies:

Bash
npm install --legacy-peer-deps
Run the development server:

Bash
npm run dev
---
##🛡️ Lessons Learned
Handling Peer Dependencies: Managed version conflicts between Vite 8 and Tailwind v4 using legacy flags.

URL Safety: Implemented URL-safe tokens (Hex/Base36) to prevent special character breakage in email links.

Error Handling: Refined React state logic to handle 400/500 errors gracefully and prevent UI flickering.
---
##👨‍💻 Connect with Me
Amresh Chaurasia BCA Graduate | MERN Stack Developer LinkedIn | Portfolio