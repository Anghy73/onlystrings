import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { useEffect, useState } from "react"
import { useTokenStore } from "../store/useTokenStore"
import { useNotesStore } from "../store/useNotesStore"
import { useNavigate } from "react-router"

interface Note {
  readonly id: number
  title: string
  content?: string
  createdAt?: string
}

function ViewNote({ note, edit }: { note: Note, edit: boolean }) {
  const user = useTokenStore(state => state.user)
  const updateNote = useNotesStore(state => state.updateNote)
  // const getAllNotes = useNotesStore(state => state.getAllNotes)
  const [titleValue, setTitleValue] = useState('')
  const navigate = useNavigate()

  const editor = useEditor({
    extensions: [StarterKit],
    editable: edit,
    editorProps: {
      attributes: {
        class: 'prose max-w-none prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none'
      }
    },
    content: note?.content,
  })

  useEffect(() => {
    if (editor && note?.content) {
      setTitleValue(note.title)
      editor.commands.setContent(note.content)
    }
  }, [editor, note])

  if (!editor) {
    return null
  }

  const handleUpdateNote = () => {
    const noteToUpdate = {
      id: note.id,
      title: titleValue,
      content: editor.getHTML(),
      user: user?.id
    }
    updateNote({ note: noteToUpdate, user: user })
    navigate("/")
  }

  return (
    <>
      {
        edit && <input onChange={(e) => setTitleValue(e.target.value)} className="bg-black w-full py-3 mb-5 text-center" type="text" value={titleValue} />
      }
      {
        edit && <div className='flex w-full gap-5'>
          <div className='w-full bg-black p-2 rounded-2xl'>
            <div className="control-group mb-10">
              <div className="heading-button-group">
                <button
                  onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                  className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
                >
                  H1
                </button>
                <button
                  onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                  className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
                >
                  H2
                </button>
                <button
                  onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                  className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
                >
                  H3
                </button>
              </div>
            </div>
          </div>
          {/* <div onClick={handleSaveNote} className='flex justify-center items-center border-3 border-black rounded-lg cursor-pointer px-5'>✅</div> */}
        </div>
      }
      <div>
        <EditorContent editor={editor} />
      </div>
      {
        edit && <button className="bg-teal-500 w-full py-4 mt-10 cursor-pointer" onClick={handleUpdateNote}>Update</button>
      }
    </>
  )
}

export default ViewNote