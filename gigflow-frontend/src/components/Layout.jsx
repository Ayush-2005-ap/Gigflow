import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">GigFlow</h1>

          <div className="space-x-6 text-sm font-medium">
            <Link to="/" className="text-gray-600 hover:text-blue-600">Gigs</Link>
            <Link to="/create" className="text-gray-600 hover:text-blue-600">Post Gig</Link>
            <Link to="/login" className="text-gray-600 hover:text-blue-600">Login</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-8">
        {children}
      </main>
    </div>
  );
}
