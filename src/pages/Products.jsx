import { useMemo, useState } from 'react'
import productsData from '../data/products'
import ProductCard from '../components/ProductCard'
import QuickView from '../components/QuickView'
export default function Products(){
  const [query, setQuery] = useState('')
  const [cat, setCat] = useState('All')
  const [sort, setSort] = useState('featured')
  const [maxPrice, setMaxPrice] = useState(3000)
  const [qv, setQv] = useState(null)
  const categories = useMemo(()=> ['All', ...Array.from(new Set(productsData.map(p=>p.category)))], [])
  const products = useMemo(() => {
    let list = productsData.filter(p => 
      (cat==='All' || p.category===cat) && p.price <= maxPrice && p.title.toLowerCase().includes(query.toLowerCase())
    )
    if (sort==='price-asc') list.sort((a,b)=>a.price-b.price)
    if (sort==='price-desc') list.sort((a,b)=>b.price-a.price)
    if (sort==='rating') list.sort((a,b)=>b.rating-a.rating)
    return list
  }, [query, cat, sort, maxPrice])
  return (
    <div className="max-w-6xl mx-auto container-px py-8">
      <div className="grid md:grid-cols-[240px_1fr] gap-6">
        <aside className="card p-4 h-fit sticky top-24">
          <h3 className="font-semibold mb-3">Filters</h3>
          <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search products..." className="w-full border rounded-xl px-3 py-2 mb-3"/>
          <label className="block text-sm text-muted mb-1">Category</label>
          <select className="w-full border rounded-xl px-3 py-2 mb-3" value={cat} onChange={e=>setCat(e.target.value)}>
            {categories.map(c=> <option key={c} value={c}>{c}</option>)}
          </select>
          <label className="block text-sm text-muted mb-1">Max Price: ₹{maxPrice}</label>
          <input type="range" min="500" max="3000" step="100" value={maxPrice} onChange={e=>setMaxPrice(Number(e.target.value))} className="w-full"/>
          <label className="block text-sm text-muted mt-3 mb-1">Sort By</label>
          <select className="w-full border rounded-xl px-3 py-2" value={sort} onChange={e=>setSort(e.target.value)}>
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Rating</option>
          </select>
        </aside>
        <main>
          <div className="flex items-baseline justify-between mb-4">
            <h2 className="text-2xl font-bold">Products</h2>
            <div className="text-sm text-muted">{products.length} items</div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map(p => (
              <div key={p.id}>
                <ProductCard p={p} />
                <button className="mt-2 text-sm text-accent hover:underline" onClick={()=>setQv(p)}>Quick view</button>
              </div>
            ))}
          </div>
        </main>
      </div>
      <QuickView open={!!qv} product={qv} onClose={()=>setQv(null)} />
    </div>
  )
}
