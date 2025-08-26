import { useState } from 'react'
import { useStore } from '../context/StoreContext'
export default function Auth(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { user, login, logout } = useStore()
  if(user){
    return (
      <div className="max-w-md mx-auto container-px py-10 text-center">
        <h2 className="text-2xl font-bold">Welcome, {user.email}</h2>
        <p className="text-muted mt-2">You are logged in (demo only).</p>
        <button className="btn btn-outline mt-6" onClick={logout}>Logout</button>
      </div>
    )
  }
  return (
    <div className="max-w-md mx-auto container-px py-10">
      <h1 className="text-2xl font-bold mb-4">Login / Signup</h1>
      <div className="card p-4 space-y-3">
        <input className="w-full border rounded-xl px-3 py-2" type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input className="w-full border rounded-xl px-3 py-2" type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button className="btn btn-primary w-full" onClick={()=>login(email)}>Continue</button>
        <p className="text-xs text-muted">This is a front-end demo. No actual auth is performed.</p>
      </div>
    </div>
  )
}
