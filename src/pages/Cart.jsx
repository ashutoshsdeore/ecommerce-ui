import { useStore } from '../context/StoreContext'
import { Link } from 'react-router-dom'
export default function Cart(){
  const { cart, updateQty, removeFromCart, clearCart } = useStore()
  const subtotal = cart.reduce((a,c)=>a + c.price * c.qty, 0)
  if(cart.length===0){
    return <div className="max-w-6xl mx-auto container-px py-10 text-center">
      <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
      <Link to="/products" className="btn btn-primary">Continue shopping</Link>
    </div>
  }
  return (
    <div className="max-w-6xl mx-auto container-px py-8">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      <div className="grid md:grid-cols-[1fr_320px] gap-6">
        <div className="card p-4">
          {cart.map(item => (
            <div key={item.id} className="flex items-center gap-4 py-3 border-b last:border-none">
              <img src={item.image} alt={item.title} className="w-20 h-16 object-contain bg-gray-50 rounded"/>
              <div className="flex-1">
                <div className="font-medium">{item.title}</div>
                <div className="text-sm text-muted">{item.category}</div>
                <button className="text-sm text-red-500" onClick={()=>removeFromCart(item.id)}>Remove</button>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1 border rounded-xl" onClick={()=>updateQty(item.id, item.qty-1)}>-</button>
                <input className="w-12 border rounded-xl text-center py-1" value={item.qty} onChange={e=>updateQty(item.id, Number(e.target.value)||1)} />
                <button className="px-3 py-1 border rounded-xl" onClick={()=>updateQty(item.id, item.qty+1)}>+</button>
              </div>
              <div className="font-semibold w-24 text-right">₹{item.price * item.qty}</div>
            </div>
          ))}
        </div>
        <div className="card p-4 h-fit">
          <h3 className="font-semibold mb-2">Order Summary</h3>
          <div className="flex justify-between py-2"><span>Subtotal</span><span>₹{subtotal}</span></div>
          <div className="flex justify-between py-2"><span>Shipping</span><span>₹0</span></div>
          <div className="flex justify-between py-2 font-bold border-t mt-2 pt-2"><span>Total</span><span>₹{subtotal}</span></div>
          <button className="btn btn-primary w-full mt-4">Checkout</button>
          <button className="btn btn-outline w-full mt-2" onClick={clearCart}>Clear cart</button>
        </div>
      </div>
    </div>
  )
}
