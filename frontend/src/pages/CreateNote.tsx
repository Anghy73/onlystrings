import { Link } from "react-router"
import Tiptap from "../components/TipTap"
import { useCurrentEditor, useEditor } from "@tiptap/react";

function CreateNote() {
  // const { editor } = useEditor()
  const { editor } = useCurrentEditor()
  console.log(editor);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log('crear');
    
    e.preventDefault()
  }

  
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center px-10 pt-28">
      <Link to="/">
        <div className="absolute top-14 left-10 border-3 border-gray-700 text-gray-500 py-2 px-4 rounded-lg font-bold hover:text-gray-500">Back</div>
      </Link>

      <form onSubmit={handleSubmit} className="w-full max-w-6xl flex flex-col justify-center items-center gap-6">
        {/* title */}
        <div className="w-full flex justify-center items-center bg-black rounded-lg py-4">
          <input className="w-full h-10 text-center text-4xl outline-0" type="text" placeholder="Untitle..." />
        </div>

        {/* tools */}
        <div className="w-full flex flex-col">
            <Tiptap />
          {/* <div className="w-full max-w-2xl text-white p-4 rounded-2xl">
          </div> */}
        </div>
        <button type="submit">Crear</button>
      </form>
    </div>

  )
}

export default CreateNote