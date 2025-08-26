import { useStore } from '../context/StoreContext'
import RatingStars from './RatingStars'
export default function QuickView({ open, onClose, product }){
  if(!open || !product) return null
  const { addToCart, toggleWishlist, wishlist } = useStore()
  const wished = wishlist.some(i=>i.id===product.id)
  return (
    <div className="fixed inset-0 z-50 bg-black/40 grid place-items-center p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden" onClick={e=>e.stopPropagation()}>
        <div className="grid md:grid-cols-2 gap-4 p-4">
          <div className="bg-gray-50 rounded-xl aspect-square grid place-items-center">
            <img src={product.image} alt={product.title} className="max-h-full"/>
          </div>
          <div>
            <h3 className="text-xl font-bold">{product.title}</h3>
            <p className="text-muted">{product.category}</p>
            <div className="mt-2"><RatingStars value={product.rating} /></div>
            <p className="mt-3 text-sm text-gray-600">{product.description}</p>
            <div className="mt-4 text-2xl font-bold">₹{product.price}</div>
            <div className="mt-4 flex gap-2">
              <button className="btn btn-primary" onClick={()=>addToCart(product,1)}>Add to cart</button>
              <button className="btn btn-outline" onClick={()=>toggleWishlist(product)}>{wished ? 'Remove ♥' : 'Wishlist ♡'}</button>
            </div>
          </div>
        </div>
        <div className="p-3 border-t text-right">
          <button className="btn btn-outline" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  )
}