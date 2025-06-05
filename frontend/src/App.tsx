import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Register from './pages/Register'
import Notes from './pages/Notes'
import Login from './pages/Login'
import CreateNote from './pages/CreateNote'
import NotePage from './pages/NotePage'
import EditNotePage from './pages/EditNotePage'
import { useUserStore } from './store/useUserStore'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {
  const user = useUserStore(state => state.user)
  console.log(user);

  return (
    <>
      <Routes>
        <Route element={<Home />}>
          <Route path='/' element={<Notes />} />
        </Route>
        <Route element={<ProtectedRoutes user={user} />}>
          <Route path='/createNote' element={<CreateNote />} />
          <Route path='/notePage/:noteId' element={<NotePage />} />
          <Route path='/editNotePage/:noteId' element={<EditNotePage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>
        {/* separar las rutas de login y registro en otro Route con verificacion si esta iniciada su sesión o no */}
      </Routes>
    </>
  )
}

export default App
