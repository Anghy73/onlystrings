import { Link } from "react-router"

function Header() {
  return (
    <header className="fixed flex justify-between items-center px-10 w-full min-h-24 bg-transparent border-b-2">
      <h1 className="text-2xl font-bold"><Link to="/">OnlyStrings</Link></h1>
      <nav className="flex gap-10">
        {/* <div>theme</div> */}
        <ul className="flex w-69 justify-center gap-4">
          <li className="flex-1 text-center border-2 py-2 px-4 rounded-md bg-cyan-950 border-cyan-900 text-cyan-500 hover:border-cyan-500 cursor-pointer hover:text-cyan-300 transition-colors font-semibold"><Link to="/register">Register</Link></li>

          <li className="flex-1 text-center border-2 py-2 px-4 rounded-md hover:text-cyan-500 cursor-pointer transition-colors font-semibold"><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header