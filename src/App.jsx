import { Routes, Route } from 'react-router-dom'

import PrivateRoute from './components/PrivateRoute.jsx'
import UpdateMember from './pages/UpdateMember.jsx'
import MemberCard from './pages/MemberCard.jsx'
import RegisterMember from './pages/RegisterMember.jsx'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<RegisterMember />} />
      <Route path='/atualizar' element={<UpdateMember />} />
      <Route path='/cartao' element={<PrivateRoute><MemberCard /></PrivateRoute>} />
    </Routes>
  )
}
