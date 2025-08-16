import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/Home'
import LoginPage from './pages/auth/Login'
import ViewRoutesPage from './pages/ViewRoutes'
import NavBarComponent from './components/NavBar'

export default function App() {
  return (
    <Routes>
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/dashboard/*" element={<NavBarComponent />}>
        <Route path="home" element={<HomePage />} />
        <Route path="routes" element={<ViewRoutesPage />} />
      </Route>
    </Routes>
  )
}
