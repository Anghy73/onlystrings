import { Link, useNavigate } from "react-router"
import Tiptap from "../components/TipTap"
import { useEditor } from "@tiptap/react";
import Document from '@tiptap/extension-document'
import Heading from '@tiptap/extension-heading'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import { useTokenStore } from "../store/useTokenStore";

const content = `
        <h1>This is a 1st yes level heading</h1>
        <h2>This is a 2nd level heading</h2>
        <h3>This is a 3rd level heading</h3>
        <h4>This 4th level heading will be converted to a paragraph, because levels are configured to be only 1, 2 or 3.dlkjsjdaskadjaslk</h4>`

function CreateNote() {
  const user = useTokenStore(state => state.user)
  const navigate = useNavigate()
  console.log(user);

  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      Heading.configure({
        levels: [1, 2, 3]
      })
    ],
    editorProps: {
      attributes: {
        class: 'prose max-w-none prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none'
      }
    },
    content: content,
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault()
      console.log('crear');
      const data = new FormData(e.currentTarget)
      const title = data.get("title")
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

      <form onSubmit={handleSubmit} className="w-full max-w-6xl flex flex-col justify-center items-center gap-6">
        {/* title */}
        <div className="w-full flex justify-center items-center bg-black rounded-lg py-4">
          <input name="title" className="w-full h-10 text-center text-4xl outline-0" type="text" placeholder="Untitle..." />
        </div>

        {/* tools */}
        <div className="w-full flex flex-col">
          <Tiptap editor={editor} />
        </div>
        <button className="bg-black w-full py-4 cursor-pointer" type="submit">Crear</button>
      </form>
    </div>

  )
}

export default CreateNote