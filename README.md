# 🧱 Tile Gallery — Modern Tile Showcase Platform

A **production-ready, full-stack tile showcase platform** built with **Next.js 16 (App Router)**.
This project bridges the gap between traditional tile showrooms and modern digital accessibility—providing a seamless experience for **architects, interior designers, and homeowners**.

---

## 🔗 Project Links

* 🌐 **Live Demo:** https://tiles-nextjs-brown.vercel.app
* 💻 **GitHub Repository:** https://github.com/muhiuddinshanto/tiles-nextjs

---

## 🧐 Why This Project? (Problem Solving)

Unlike typical eCommerce or gallery websites, this platform is designed to solve **real-world problems** in the tile industry:

* 🔍 **Managing Large Inventory**
  Finding the right tile among thousands (by size, material, or category) can be difficult.
  → Implemented a **Smart Search & Filtering System** for instant results.

* ⚡ **Performance & Image Loading**
  High-quality tile images often slow down websites.
  → Solved using **Next.js Image Optimization** for faster loading without compromising quality.

* 🔐 **Secure Access to Premium Content**
  Certain data (e.g., wholesale pricing, premium collections) should be restricted.
  → Implemented **Protected Routes using Better Auth**.

---

## 🛠️ Technology Choices (Why These?)

| Technology               | Why This?                                | Why Not Others?                           |
| ------------------------ | ---------------------------------------- | ----------------------------------------- |
| **Next.js (App Router)** | SEO-friendly, powerful Server Components | React SPA lacks SEO & slower initial load |
| **Turbopack**            | Ultra-fast dev build & refresh           | Webpack is slower in large apps           |
| **Better Auth**          | Lightweight, modern & secure             | NextAuth can be complex to configure      |
| **MongoDB**              | Flexible schema for dynamic tile data    | SQL is rigid for evolving structures      |
| **Tailwind + DaisyUI**   | Fast, customizable modern UI             | Bootstrap is heavier & less flexible      |
| **SwiperJS**             | Premium 3D sliders & touch experience    | Slick is outdated & less compatible       |

---

## ✨ Key Features

* 🔐 **Secure Authentication**
  Google + Email/Password login system

* 🔎 **Universal Search System**
  Instantly find tiles by **name or category**

* 🧱 **Interactive Showcase**
  SwiperJS-powered **3D coverflow slider**

* 📱 **Fully Responsive UI**
  Pixel-perfect design across all devices

* 🚀 **High Performance**
  Server-side rendering (SSR) for faster data fetching

* 🎨 **Modern UI/UX**
  Built with Tailwind CSS & DaisyUI components

---

## 📁 Project Structure

```bash
app/
 ├── (auth)/        # Authentication routes (signin/signup)
 ├── all-tiles/     # Protected product listing
 ├── my-profile/    # User dashboard (private)
 ├── api/           # Backend APIs
 ├── layout.js      # Root layout
 └── page.js        # Homepage

components/
 ├── PortfolioTiles # SwiperJS 3D slider
 ├── ProductGallery # Image switcher
 ├── Navbar/Footer  # Layout components
 └── CTA            # Call-to-action section
```

---

## ⚙️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/muhiuddinshanto/tiles-nextjs

# Install dependencies
npm install

# Setup environment variables (.env.local)
# DATABASE_URL, BETTER_AUTH_SECRET, etc.

# Run development server
npm run dev
```

---

## 📌 Future Roadmap

* [ ] 🤖 **AI-Based Tile Visualizer**
  Preview tiles in user's room image

* [ ] 🛠️ **Admin Dashboard**
  Manage tiles (add/edit/delete)

* [ ] ❤️ **Wishlist System**
  Save favorite tiles

* [ ] 🌙 **Dark Mode**
  Improved user experience

---

## 👨‍💻 Author

**Muhiuddin Shanto**
Full-Stack Web Developer & Digital Marketer

* GitHub: https://github.com/muhiuddinshanto

---

## ⭐ Support

If you found this project helpful:

* ⭐ Star the repository
* 🍴 Fork it
* 📢 Share it with others

