# E-Commerce UI (React + Tailwind)
This is a front-end-only ecommerce UI inspired by the reference at **eyesome.netlify.app**.  
Built with **React (Vite)**, **TailwindCSS**, and **React Router**.
## Features
- Home with hero and featured products
- Product listing with search, filters, sorting, and a *Quick View* modal
- Product detail page
- Cart & Wishlist with localStorage persistence
- Simple Login/Signup demo (no backend)
- Responsive, reusable components, smooth transitions
## Getting Started
```bash
npm install
npm run dev
# Build
npm run build && npm run preview
```
## Structure
```
src/
  components/
  pages/
  context/
  data/
  assets/
```
## Notes
- Data is static in `src/data/products.js`.
- Auth is mocked; uses localStorage.
- Deploy easily to Vercel/Netlify with build command `npm run build` and output `dist`.
