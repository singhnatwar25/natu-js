Bhai wah! Tumhara `natu-js` framework kaafi tagda ho gaya hai — React-style structure, JSX support, aur basic routing/lifecycle methods ke sath! 💪 Ab chaliye documentation ready karte hain, taaki koi bhi use kar sake isse jaise ek **real frontend library** 🔥

---

# 📚 **natu-js Documentation**

> ⚡ Lightweight React-style UI framework built with TypeScript, JSX, and Vite.

---

## 🚀 Getting Started

### 1. **Clone Project & Install Dependencies**

```bash
git clone https://github.com/your-username/natu-js.git
cd natu-js
npm install
```

### 2. **Start Development Server**

```bash
npm run dev
```

Vite dev server will run on:  
👉 `http://localhost:5173/`

---

## 🛠️ Project Structure

```
natu-js/
├── public/
├── src/
│   ├── core/           # Core framework logic
│   │   ├── jsx.ts      # h() and Fragment functions
│   │   ├── render.ts   # Renderer to mount VDOM
│   │   └── lifecycle.ts # onMount hook
│   ├── components/
│   │   ├── App.tsx     # Root component
│   │   ├── Button.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   ├── router/
│   │   └── router.ts   # Simple router logic
│   └── main.tsx
├── index.html
├── tsconfig.json
└── vite.config.ts
```

---

## 🔧 Core Features

### ✅ JSX Compiler Support

```tsx
export function h(type, props, ...children) {
  return { type, props: props || {}, children };
}
```

Use `h()` as JSX factory. See `vite.config.ts` for config.

---

### ✅ Component System (like React)

```tsx
export function Button() {
  return <button onclick={() => alert("Clicked!")}>Click</button>;
}
```

---

### ✅ Lifecycle Hook: `onMount()`

```tsx
import { onMount } from '../core/lifecycle';

export function Home() {
  onMount(() => {
    console.log("Component mounted!");
  });

  return <h2>Home Page</h2>;
}
```

---

### ✅ Simple Router

```tsx
import { currentRoute } from './router';

const route = currentRoute();
if (route === '/') {
  render(<Home />, app);
} else if (route === '/about') {
  render(<About />, app);
}
```

---

## 🌐 Routing

Use anchor tags to navigate:

```tsx
<a href="/">Home</a>
<a href="/about">About</a>
```

Router will reload component on path change.

---

## 💡 Add Your Own Components

All components live in `src/components/`.  
Create new file: `Card.tsx`, `Input.tsx`, `Modal.tsx`, etc.

```tsx
export function Card({ title }) {
  return <div class="card">{title}</div>;
}
```

---

## 🧪 Future Plans (Ideas 💭)

- [ ] Virtual DOM diffing (like React Fiber)
- [ ] State management system
- [ ] Context API
- [ ] CLI tool for scaffolding
- [ ] Component lazy loading

---

## 🤝 Contribute

Feel free to fork, star ⭐, and contribute your own features!

---

## 📦 Build for Production

```bash
npm run build
```

---

## 🙌 Made With ❤️ by Natwar Singh
