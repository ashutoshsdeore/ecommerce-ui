import { Link, NavLink } from 'react-router-dom'
import { useStore } from '../context/StoreContext'
import { useState } from 'react'
export default function Navbar() {
  const { cart, wishlist, user, logout } = useStore()
  const [open, setOpen] = useState(false)
  const navItem = (to, label) => (
    <NavLink to={to} className={({isActive}) => `px-3 py-2 rounded-xl ${isActive ? 'bg-gray-100' : 'hover:bg-gray-50'}`} onClick={()=>setOpen(false)}>{label}</NavLink>
  )
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto container-px flex items-center justify-between h-16">
        <Link to="/" className="text-xl font-bold tracking-tight"><span className="text-accent">Eye</span>some</Link>
        <nav className="hidden md:flex items-center gap-2">
          {navItem('/products','Shop')}
          {navItem('/wishlist','Wishlist')}
          {navItem('/cart','Cart')}
        </nav>
        <div className="flex items-center gap-3">
          {user ? (<><span className="text-sm text-muted hidden sm:block">{user.email}</span><button className="btn btn-outline h-9" onClick={logout}>Logout</button></>) : (<Link to="/auth" className="btn btn-primary h-9">Login</Link>)}
          <button className="md:hidden p-2 border rounded-xl" onClick={()=>setOpen(o=>!o)} aria-label="Toggle menu">☰</button>
        </div>
      </div>
      {open && (<div className="md:hidden border-t"><div className="max-w-6xl mx-auto container-px py-2 flex flex-col gap-1">
        <NavLink to="/products" onClick={()=>setOpen(false)} className="py-2">Shop</NavLink>
        <NavLink to="/wishlist" onClick={()=>setOpen(false)} className="py-2">Wishlist ({wishlist.length})</NavLink>
        <NavLink to="/cart" onClick={()=>setOpen(false)} className="py-2">Cart ({cart.reduce((a,c)=>a+c.qty,0)})</NavLink>
      </div></div>)}
    </header>
  )
}
