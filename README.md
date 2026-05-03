# 📚 BookNest
 
A modern online bookstore web application built with **Next.js 16**, where users can browse, search, and purchase books across multiple categories.
 
---
 
## 🌐 Live Demo
 
[https://book-nest-rho-five.vercel.app](https://book-nest-rho-five.vercel.app)
 
---
 
## ✨ Features
 
- 🔍 **Real-time Book Search** — Search books by title instantly as you type
- 🗂️ **Category Filter** — Filter books by Story, Science, Tech, Fiction, and more
- 📖 **Book Details Page** — View detailed information for each book
- 🛒 **Add to Cart / Buy Now** — Purchase flow for authenticated users
- 🔐 **Authentication** — Register and Login with session management
- 🛡️ **Protected Routes** — Book details and profile pages are accessible only to logged-in users
- 👤 **My Profile Page** — View your personal account information
- 📱 **Fully Responsive** — Works seamlessly on mobile, tablet, and desktop
---
 
## 🛠️ Tech Stack
 
| Technology | Purpose |
|---|---|
| [Next.js 16](https://nextjs.org/) | React Framework (App Router) |
| [Tailwind CSS](https://tailwindcss.com/) | Styling |
| [DaisyUI](https://daisyui.com/) | UI Components |
| [Better Auth](https://www.better-auth.com/) | Authentication |
| [React Icons](https://react-icons.github.io/react-icons/) | Icons |
| [Google Cloud Console](https://console.cloud.google.com/) | Social Login
 
---
 
 
## 🔐 Authentication & Protected Routes
 
The following routes are protected and require the user to be logged in:

| `/profile` | Requires login |
| `/all-books` | Requires login |
| `/all-books/[id]` | Requires login |
 
If an unauthenticated user tries to access these routes, they are automatically redirected to the `/register` page.
 
---
 
 
## 📄 Purpose
 
This project is for educational purposes.
 
---
 
## 🙌 Author
 
Made with ❤️ using Next.js and Tailwind CSS.