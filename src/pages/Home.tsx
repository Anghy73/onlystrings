import { Outlet } from "react-router"
import Header from "../components/Header"

function Home() {
  return (
    <div className="relative w-full h-full min-h-screen bg-[#1e1e20aa] overflow-x-hidden">
      <div className="absolute -top-20 -right-5 bg-[#ffffffbb] w-80 h-80 rounded-full opacity-40 shadow-[0px_0px_100px_50px_rgba(255,_255,_255,_1)]" />
      <div className="absolute bottom-0 -left-20 bg-[#ffffffbb] w-80 h-80 rounded-full opacity-40 shadow-[0px_0px_100px_50px_rgba(255,_255,_255,_1)]" />
      <div className="w-full h-full min-h-screen backdrop-blur-2xl">
        <Header />
        <main className="w-full h-full flex justify-center items-center px-10 pb-20">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Home