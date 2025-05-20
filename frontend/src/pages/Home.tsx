import { Outlet } from "react-router"
import Header from "../components/Header"

function Home() {
  return (
    <div className="w-full h-screen">
      <Header />
      <main className="w-full h-full flex justify-center items-center px-10">
        <Outlet />
      </main>
    </div>
  )
}

export default Home