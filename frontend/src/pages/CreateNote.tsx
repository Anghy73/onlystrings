import { Link, useNavigate } from "react-router"
import Tiptap from "../components/TipTap"
import { useEditor } from "@tiptap/react";
import { useTokenStore } from "../store/useTokenStore";
import { useState } from "react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from '@tiptap/extension-text-align'
import Underline from '@tiptap/extension-underline'

const content = `
        <h1>This is a 1st yes level heading</h1>
        <h2>This is a 2nd level heading</h2>
        <h3>This is a 3rd level heading</h3>
        <h4>This 4th level heading will be converted to a paragraph, because levels are configured to be only 1, 2 or 3.dlkjsjdaskadjaslk</h4>`

function CreateNote() {
  const [title, setTitle] = useState('')
  const user = useTokenStore(state => state.user)
  const navigate = useNavigate()
  // console.log(user);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3, 4]
        }
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Underline,
    ],
    editorProps: {
      attributes: {
        class: 'prose min-h-[500px] prose-white max-w-none prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none'
      }
    },
    content: content,
  })

  const handleCreateNote = async () => {
    try {
      const content = editor?.getHTML()
      const note = {
        title: title,
        content,
        user: user?.id
      }
      console.log(note);
      const res = await fetch(`http://localhost:5600/notes/${user?.id}`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          'Authorization': `Bearer ${user?.token}`,
        },
        body: JSON.stringify(note)
      })
      const json = await res.json()
      console.log(json);
      navigate("/")
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
      }
    }
  }

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center px-10 pt-28">
      <Link to="/">
        <div className="absolute top-14 left-10 border-3 border-gray-700 text-gray-500 py-2 px-4 rounded-lg font-bold hover:text-gray-500">Back</div>
      </Link>

      <div className="w-full max-w-6xl flex flex-col justify-center items-center gap-6">
        {/* title */}
        <div className="w-full flex justify-center items-center bg-black rounded-lg py-4">
          <input onChange={(e) => setTitle(e.currentTarget.value)} name="title" className="w-full h-10 text-center text-4xl outline-0" type="text" placeholder="Untitle..." value={title} />
        </div>

        {/* tools */}
        <div className="w-full">
          <Tiptap editor={editor} />
        </div>
        <button onClick={handleCreateNote} className="bg-black w-full py-4 cursor-pointer">Crear</button>
      </div>
    </div>

  )
}

export default CreateNote