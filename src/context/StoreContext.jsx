import React, { createContext, useContext, useMemo, useState, useEffect } from 'react'
import productsData from '../data/products'
const StoreContext = createContext(null)
export function StoreProvider({ children }) {
  const [products] = useState(productsData)
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('cart') || '[]'))
  const [wishlist, setWishlist] = useState(() => JSON.parse(localStorage.getItem('wishlist') || '[]'))
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user') || 'null'))
  useEffect(() => localStorage.setItem('cart', JSON.stringify(cart)), [cart])
  useEffect(() => localStorage.setItem('wishlist', JSON.stringify(wishlist)), [wishlist])
  useEffect(() => localStorage.setItem('user', JSON.stringify(user)), [user])
  const addToCart = (item, qty=1) => {
    setCart(prev => {
      const found = prev.find(i => i.id === item.id)
      if (found) return prev.map(i => i.id===item.id ? {...i, qty: i.qty + qty} : i)
      return [...prev, { ...item, qty }]
    })
  }
  const removeFromCart = (id) => setCart(prev => prev.filter(i => i.id !== id))
  const updateQty = (id, qty) => setCart(prev => prev.map(i => i.id===id ? {...i, qty: Math.max(1, qty)} : i))
  const clearCart = () => setCart([])
  const toggleWishlist = (item) => {
    setWishlist(prev => prev.some(i => i.id===item.id) ? prev.filter(i => i.id!==item.id) : [...prev, item])
  }
  const login = (email) => setUser({ email })
  const logout = () => setUser(null)
  const value = useMemo(() => ({ products, cart, wishlist, user, addToCart, removeFromCart, updateQty, clearCart, toggleWishlist, login, logout }), [products, cart, wishlist, user])
  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}
export const useStore = () => useContext(StoreContext)
