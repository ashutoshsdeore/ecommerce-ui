import { useStore } from '../context/StoreContext'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
export default function Wishlist(){
  const { wishlist } = useStore()
  if(wishlist.length===0){
    return <div className="max-w-6xl mx-auto container-px py-10 text-center">
      <h2 className="text-2xl font-bold mb-2">Your wishlist is empty</h2>
      <Link to="/products" className="btn btn-primary">Browse products</Link>
    </div>
  }
  return (
    <div className="max-w-6xl mx-auto container-px py-8">
      <h1 className="text-2xl font-bold mb-4">Wishlist</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {wishlist.map(p => <ProductCard key={p.id} p={p} />)}
      </div>
    </div>
  )
}
