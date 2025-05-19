import { Outlet } from "react-router"
import Header from "../components/Header"

function Home() {
  return (
    <div className="h-screen">
      <Header />
      <main className="w-full h-full flex justify-center items-center">
        <Outlet />
      </main>
    </div>
  )
}

export default Home