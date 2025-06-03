import { Link } from "react-router"

function Back() {
  return (
    <Link to="/">
      <button className="absolute top-14 left-10 border-3 border-[#888]  py-2 px-4 rounded-lg font-bold hover:text-[#eee] hover:border-[#eee] text-[#888] text-lg pb-2 cursor-pointer"><span className="text-xl pb-1">&#60;</span> Back</button>
    </Link>
  )
}

export default Back