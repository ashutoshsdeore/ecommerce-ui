import { Link } from 'react-router-dom'
export default function Hero(){
  return (
    <section className="relative">
      <img src="/assets/hero.svg" alt="Hero" className="w-full h-[46vh] md:h-[60vh] object-cover rounded-b-2xl"/>
      <div className="absolute inset-0 grid place-items-center text-center">
        <div className="text-white drop-shadow-lg p-4">
          <h1 className="text-3xl md:text-5xl font-bold">Style that sees you</h1>
          <p className="mt-3 text-white/90 max-w-xl">Minimal designs. Polarized clarity. Everyday comfort.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/products" className="btn btn-primary">Shop now</Link>
            <a href="#featured" className="btn btn-outline">Explore</a>
          </div>
        </div>
      </div>
    </section>
  )
}