# 🏕️ The Wild Oasis — Booking Dashboard SPA

Welcome to **The Wild Oasis**, a full-featured single-page **hotel & retreat booking dashboard** built with **React, Vite, Tailwind CSS**, and **Supabase**.
This project demonstrates modern React architecture — authentication, CRUD operations, real-time updates, protected routes, React Query, and dark mode — all in one elegant dashboard.

> ✨ *Manage cabins, bookings, users, and settings — effortlessly.*

---

## 🌍 Live Demo

🔗 **Website:** [adarsh-wildoasis.netlify.app](https://adarsh-wildoasis.netlify.app/)
💻 **GitHub Repo:** [github.com/Adarsh152004/the-wild-oasis](https://github.com/Adarsh152004/the-wild-oasis)

---

## 🚀 Features

* 🔐 **Supabase Authentication** (email/password)
* 🧭 **Protected Routes** using React Router v6
* ⚙️ **Dashboard Layout** with modular pages: Cabins, Bookings, Users, Settings
* 🧠 **Data Fetching & Caching** with `@tanstack/react-query`
* ✨ **Full CRUD Functionality** for cabins, bookings, and user data
* 🌓 **Dark Mode** toggle using Context API + Tailwind dark classes
* 🔔 **Toast Notifications** (`react-hot-toast`)
* 🛠️ **React Query DevTools** for debugging
* 📱 **Responsive UI** with Tailwind CSS
* 🧩 **Reusable Components**: Modals, Forms, Buttons, Tables, Loaders, etc.
* 📦 **Supabase Backend Integration**
* ⚡ **Vite** for blazing fast builds

---

## 🧩 Tech Stack

| Technology           | Purpose                             |
| -------------------- | ----------------------------------- |
| **React + Vite**     | Frontend framework & build tool     |
| **Tailwind CSS**     | Styling and responsive design       |
| **Supabase**         | Authentication & database backend   |
| **React Query**      | Data fetching and caching           |
| **React Router DOM** | Client-side routing                 |
| **React Hot Toast**  | Notifications                       |
| **Context API**      | Global state management (Dark mode) |
| **Netlify**          | Deployment & hosting                |

---

## ⚙️ Project Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Adarsh152004/the-wild-oasis.git
cd the-wild-oasis
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Tailwind CSS (already configured)

Tailwind is pre-configured via `postcss.config.js` and `tailwind.config.js`.

To start customizing, edit `tailwind.config.js` or use Tailwind utility classes.

---

## 🔑 Environment Variables

Create a `.env` file in your root directory:

```bash
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Ensure your `.env` is **ignored** in `.gitignore` to keep it private.

---

## 🔒 Authentication (Supabase Setup)

1. Go to [https://supabase.com](https://supabase.com) and create a project.
2. Navigate to **Authentication → Providers** and enable **Email**.
3. Copy your project’s:

   * `Project URL`
   * `Anon public key`
4. Paste them into your `.env` file as shown above.

---

## 🧱 Database Setup (Optional Example)

In Supabase SQL editor, run:

```sql
create table cabins (
  id uuid default uuid_generate_v4() primary key,
  name text,
  description text,
  price numeric,
  image text
);

create table bookings (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users(id),
  cabin_id uuid references cabins(id),
  start_date date,
  end_date date,
  total_price numeric,
  status text default 'confirmed'
);
```

---

## 🧭 Run the App

```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173)

---

## 🧰 Folder Structure

```
the-wild-oasis/
│
├── src/
│   ├── components/        # UI Components (Button, Modal, etc.)
│   ├── contexts/          # Global Contexts (DarkModeContext, AuthContext)
│   ├── hooks/             # Custom React Hooks
│   ├── pages/             # Dashboard Pages (Cabins, Bookings, etc.)
│   ├── services/          # Supabase interaction logic
│   ├── App.jsx            # Root component
│   ├── main.jsx           # Entry point
│   └── supabase.js        # Supabase client setup
│
├── public/
│   └── preview.png        # App preview image
│
├── .env                   # Environment variables (ignored by git)
├── .gitignore
├── tailwind.config.js
├── vite.config.js
├── package.json
└── README.md
```

---

## 🖼️ Preview

![Wild Oasis Dashboard Preview](./public/preview.png)

---

## 🧠 Developer Notes

* Protected routes implemented via `<ProtectedRoute />` wrapper.
* Authentication + CRUD fully handled through Supabase SDK.
* Queries and mutations optimized with React Query and cache invalidation.
* Dark mode persists across sessions via localStorage.

---

## 🚀 Deployment

Build for production:

```bash
npm run build
```

Deploy easily on **Netlify**, **Vercel**, or **Cloudflare Pages**.

For Netlify:

1. Run `npm run build`
2. Drag the `dist/` folder into Netlify
3. Add environment variables under **Netlify → Site Settings → Environment Variables**

---

## 🧾 License

MIT © 2025 [Adarsh Pathak](https://github.com/Adarsh152004)

---
