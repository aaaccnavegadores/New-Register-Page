import { Navigate } from 'react-router-dom'

export default function PrivateRoute({ children }) {
  const member = sessionStorage.getItem('member')

  if (!member) {
    return <Navigate to='/atualizar' />
  }

  return children
}