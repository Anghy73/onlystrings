import { Link } from "react-router"
import { useTokenStore } from "../store/useTokenStore"

function Header() {
  const user = useTokenStore(state => state.user)
  const setUser = useTokenStore(state => state.setUser)
  const handleLogout = () => {
    console.log('hi');
    setUser(null)
  }

  const handleCreate = () => {
    console.log('hi');
    // setUser(null)
  }

  return (
    <header className="fixed top-0 left-0 flex justify-between items-center px-10 w-full min-h-24 bg-[#00000010] backdrop-blur-2xl">
      <h1 className="text-2xl font-bold"><Link to="/">OnlyStrings</Link></h1>
      <nav className="flex gap-10">
        {/* <div>theme</div> */}
        <ul className="flex w-69 justify-end gap-4">
          {
            user == null ? <>
              <div className="flex-1">
                <Link to="/register">
                  <li className="w-full text-center border-2 py-2 px-4 rounded-md bg-cyan-950 border-cyan-900 text-cyan-500 hover:border-cyan-500 cursor-pointer hover:text-cyan-300 transition-colors font-semibold">Register</li>
                </Link>
              </div>
              <div className="flex-1">
                <Link to="/login">
                  <li className="text-cw-full text-center border-2 py-2 px-4 rounded-md hover:text-cyan-500 cursor-pointer transition-colors font-semibold">Login</li>
                </Link>
              </div>

            </> : <>
              <div className="flex-1">
                <Link to="/createNote">
                  <button className="w-full text-center border-2 py-2 px-4 rounded-2xl bg-black/70 border-[#222] text-white cursor-pointer transition-colors font-semibold" onClick={handleCreate}>Create</button>
                </Link>
              </div>
              <button className="w-full max-w-32 text-center border-2- border-white py-2 px-4 rounded-2xl cursor-pointer transition-colors bg-white text-black font-bold" onClick={handleLogout}>Logout</button>
            </>
          }
        </ul>
      </nav>
    </header>
  )
}

export default Header