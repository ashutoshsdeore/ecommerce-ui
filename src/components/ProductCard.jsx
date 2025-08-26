import { Link } from 'react-router-dom'
import { useStore } from '../context/StoreContext'
import RatingStars from './RatingStars'
import { useState } from 'react'
export default function ProductCard({ p }){
  const { addToCart, toggleWishlist, wishlist } = useStore()
  const [loading, setLoading] = useState(false)
  const wished = wishlist.some(i=>i.id===p.id)
  const handleAdd = () => { setLoading(true); setTimeout(()=>{ addToCart(p,1); setLoading(false) }, 400) }
  return (
    <div className="card p-3 flex flex-col">
      <Link to={`/products/${p.id}`} className="rounded-xl overflow-hidden bg-gray-50 aspect-[4/3] grid place-items-center">
        <img src={p.image} alt={p.title} className="max-h-full" loading="lazy"/>
      </Link>
      <div className="mt-3 flex-1">
        <Link to={`/products/${p.id}`} className="font-semibold hover:underline block">{p.title}</Link>
        <div className="text-sm text-muted">{p.category}</div>
        <div className="mt-1"><RatingStars value={p.rating} /></div>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div className="text-lg font-bold">₹{p.price}</div>
        <div className="flex gap-2">
          <button onClick={()=>toggleWishlist(p)} className={`px-3 py-2 rounded-xl border ${wished ? 'bg-accent text-white border-accent' : 'hover:bg-gray-50'}`} aria-label="Wishlist">{wished ? '♥' : '♡'}</button>
          <button onClick={handleAdd} className="btn btn-primary h-10 min-w-24">{loading ? 'Adding...' : 'Add'}</button>
        </div>
      </div>
    </div>
  )
}
