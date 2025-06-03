import { Link, useNavigate } from "react-router"
import Tiptap from "../components/TipTap"
import { useEditor } from "@tiptap/react";
import { useTokenStore } from "../store/useTokenStore";
import { useState } from "react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from '@tiptap/extension-text-align'
import Underline from '@tiptap/extension-underline'
import { toast, Toaster } from "sonner";
import Back from "../components/Back";

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
      if (title.trim() == '') {
        return toast.warning("We need a title")
      }
      const content = editor?.getHTML()
      const note = {
        title: title,
        content,
        user: user?.id
      }

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
    <div className="relative min-h-screen flex flex-col justify-center items-center px-10 pt-28 bg-[#1e1e20aa]">
      <Toaster richColors />
      <Back />

      <div className="w-full max-w-6xl flex flex-col justify-center items-center gap-10 mb-10">
        {/* title */}
        <div className="w-full flex justify-center items-center bg-[#090909] rounded-lg py-6">
          <input onChange={(e) => setTitle(e.currentTarget.value)} name="title" className="w-full h-10 text-center text-4xl outline-0" type="text" placeholder="Title" value={title} />
        </div>

        {/* tools */}
        <div className="w-full">
          <Tiptap editor={editor} />
        </div>
        <button onClick={handleCreateNote} className="bg-[#090909] text-2xl font-bold rounded-lg text-[#aaa] hover:text-[#eee] w-full py-4 cursor-pointer">Crear</button>
      </div>
    </div>

  )
}

export default CreateNote