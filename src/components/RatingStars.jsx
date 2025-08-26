export default function RatingStars({ value=0 }){
  const full = Math.floor(value)
  const half = value - full >= 0.5
  const stars = Array.from({length:5}, (_,i)=> i < full ? '★' : (i===full && half ? '☆' : '☆'))
  return <div className="text-yellow-500" aria-label={`Rating: ${value} out of 5`} title={`${value} / 5`}>{stars.join(' ')}</div>
}