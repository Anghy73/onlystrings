import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Register from './pages/Register'
import Notes from './pages/Notes'
import Login from './pages/Login'

function App() {
  return (
    <>
      <Routes>
        <Route element={<Home />}>
          <Route path='/' element={<Notes />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        {/* separar las rutas de login y registro en otro Route con verificacion si esta iniciada su sesión o no */}
      </Routes>
    </>
  )
}

export default App
