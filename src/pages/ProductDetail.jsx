import { useParams, Link } from 'react-router-dom'
import products from '../data/products'
import RatingStars from '../components/RatingStars'
import { useStore } from '../context/StoreContext'
export default function ProductDetail(){
  const { id } = useParams()
  const product = products.find(p=>String(p.id)===id)
  const { addToCart, toggleWishlist, wishlist } = useStore()
  if(!product) return <div className="max-w-6xl mx-auto container-px py-10">Product not found. <Link to="/products" className="text-accent">Go back</Link></div>
  const wished = wishlist.some(i=>i.id===product.id)
  return (
    <div className="max-w-6xl mx-auto container-px py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-50 rounded-2xl aspect-square grid place-items-center">
          <img src={product.image} alt={product.title} className="max-h-full"/>
        </div>
        <div>
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-muted">{product.category}</p>
          <div className="mt-2"><RatingStars value={product.rating} /></div>
          <p className="mt-4 text-gray-700">{product.description}</p>
          <div className="mt-6 text-3xl font-bold">₹{product.price}</div>
          <div className="mt-6 flex gap-3">
            <button className="btn btn-primary" onClick={()=>addToCart(product,1)}>Add to cart</button>
            <button className="btn btn-outline" onClick={()=>toggleWishlist(product)}>{wished ? 'Remove ♥' : 'Wishlist ♡'}</button>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h3 className="font-semibold mb-3">You may also like</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.filter(p=>p.category===product.category && p.id!==product.id).slice(0,4).map(p => (
            <Link key={p.id} to={`/products/${p.id}`} className="card p-3">
              <img src={p.image} alt={p.title} className="rounded-xl bg-gray-50 aspect-[4/3] object-contain"/>
              <div className="mt-2 text-sm font-medium">{p.title}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
