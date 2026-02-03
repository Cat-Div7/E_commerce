import { Link } from 'react-router-dom'

export function AuthNavbar({ showLogin, showRegister }) {
  return (
    <nav className="flex items-center justify-between px-6 py-4">
      <Link to="/" className="text-xl font-bold">
        E-commerce
      </Link>

      <div className="flex items-center gap-4">
        {showLogin && (
          <Link to="/auth/login" className="btn-outline">
            Sign In
          </Link>
        )}

        {showRegister && (
          <Link to="/auth/register" className="btn-primary">
            Sign Up
          </Link>
        )}
      </div>
    </nav>
  )
}

