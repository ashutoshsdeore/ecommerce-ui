import { Link } from 'react-router-dom'
export default function NotFound(){
  return <div className="max-w-6xl mx-auto container-px py-10 text-center">
    <h1 className="text-3xl font-bold mb-2">404</h1>
    <p className="text-muted mb-4">Page not found</p>
    <Link to="/" className="btn btn-primary">Go Home</Link>
  </div>
}
