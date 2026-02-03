import { Navigate } from 'react-router-dom'

export const GuestRoute = ({ children }) => {
  const isAuthenticated = false

  return isAuthenticated ? <Navigate to="/" replace /> : children
}
