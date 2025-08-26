export default function Footer(){
  return (
    <footer className="mt-16 border-t">
      <div className="max-w-6xl mx-auto container-px py-10 text-sm text-muted flex flex-col sm:flex-row justify-between gap-4">
        <p>© {new Date().getFullYear()} Eyesome UI Clone. Built with React + Tailwind.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-gray-900">Privacy</a>
          <a href="#" className="hover:text-gray-900">Terms</a>
          <a href="#" className="hover:text-gray-900">Support</a>
        </div>
      </div>
    </footer>
  )
}