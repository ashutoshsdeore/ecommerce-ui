import Hero from '../components/Hero'
import products from '../data/products'
import ProductCard from '../components/ProductCard'
import { useState } from 'react'
import QuickView from '../components/QuickView'
export default function Home(){
  const featured = products.slice(0, 6)
  const [qv, setQv] = useState(null)
  return (
    <div>
      <Hero />
      <section id="featured" className="max-w-6xl mx-auto container-px py-10">
        <div className="flex items-end justify-between mb-4">
          <h2 className="text-2xl font-bold">Featured</h2>
          <button className="text-accent hover:underline" onClick={()=>document.querySelector('#grid')?.scrollIntoView({behavior:'smooth'})}>See all</button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {featured.map(p => (
            <div key={p.id}>
              <ProductCard p={p} />
              <button className="mt-2 text-sm text-accent hover:underline" onClick={()=>setQv(p)}>Quick view</button>
            </div>
          ))}
        </div>
      </section>
      <section id="grid" className="max-w-6xl mx-auto container-px pb-12">
        <h2 className="text-xl font-semibold mb-3">New Arrivals</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.slice(4, 12).map(p => <ProductCard key={p.id} p={p} />)}
        </div>
      </section>
      <QuickView open={!!qv} product={qv} onClose={()=>setQv(null)} />
    </div>
  )
}
