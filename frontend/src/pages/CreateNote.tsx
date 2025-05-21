import { Link } from "react-router"
import Tiptap from "../components/TipTap"

function CreateNote() {
  return (
    <div className="relative min-h-screen flex justify-center items-center">
      <Link to="/">
        <div className="absolute top-14 left-10 border-3 border-gray-700 text-gray-500 py-2 px-4 rounded-lg font-bold hover:text-gray-500">Back</div>
      </Link>
      <div className="w-full flex justify-center items-center">
        <div className="w-full max-w-2xl text-white p-4 rounded-2xl">
          <Tiptap />
        </div>
        <h1 className="prose">daklsjd h1 title</h1>
      </div>
    </div>
  )
}

export default CreateNote