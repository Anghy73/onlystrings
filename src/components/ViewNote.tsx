import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { useEffect, useState } from "react"
import { useUserStore } from "../store/useUserStore"
import { useNotesStore } from "../store/useNotesStore"
import { useNavigate } from "react-router"
import { ArrowTurnBackwardIcon, ArrowTurnForwardIcon, Heading01Icon, Heading02Icon, Heading03Icon, Heading04Icon, LeftToRightBlockQuoteIcon, LeftToRightListBulletIcon, LeftToRightListNumberIcon, SourceCodeIcon, SourceCodeSquareIcon, TextAlignCenterIcon, TextAlignJustifyCenterIcon, TextAlignLeftIcon, TextAlignRightIcon, TextBoldIcon, TextItalicIcon, TextStrikethroughIcon, TextUnderlineIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { toast } from "sonner"

interface Note {
  readonly id: number
  title: string
  content?: string
  createdAt?: string
}

function ViewNote({ note, edit }: { note: Note | null, edit: boolean }) {
  const user = useUserStore(state => state.user)
  const updateNote = useNotesStore(state => state.updateNote)
  const [title, setTitle] = useState('')
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
      setTitle(note.title)
      editor.commands.setContent(note.content)
    }
  }, [editor, note])

  if (!editor || !note) {
    return null
  }

  const handleUpdateNote = () => {
    if (title.trim() == '') {
      return toast.warning("We need a title")
    }
    const noteToUpdate = {
      id: note?.id,
      title: title,
      content: editor.getHTML(),
      user: user?.id
    }
    updateNote({ note: noteToUpdate, user: user })
    navigate("/")
  }

  return (
    <div>

      <div className="w-full flex justify-center items-center bg-[#090909] rounded-lg py-6 mb-10">
        <input onChange={(e) => setTitle(e.currentTarget.value)} name="title" className="w-full h-10 text-center text-4xl outline-0" type="text" placeholder="Title" value={title} readOnly={!edit} />
      </div>

      {
        edit && <div className='sticky top-4 z-10 w-full gap-5'>
          {/* contenedor de las herraminetas */}
          <div className='w-full p-4 bg-[#090909] border-2 border-black rounded-md'>
            {/* donde se contienen a todos lo grupos */}
            <div className="control-group flex flex-wrap justify-center gap-2">
              {/* grupo de undo/redo */}
              <div className="button-group bg-[#0f0f0f] p-1 rounded-sm">
                <button onClick={() => editor.chain().focus().undo().run()} disabled={!editor.can().undo()}>
                  <HugeiconsIcon icon={ArrowTurnBackwardIcon} />
                </button>
                <button onClick={() => editor.chain().focus().redo().run()} disabled={!editor.can().redo()}>
                  <HugeiconsIcon icon={ArrowTurnForwardIcon} />
                </button>
              </div>
              {/* grupo de heading */}
              <div className="button-group bg-[#0f0f0f] p-1 rounded-sm">
                <button
                  onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                  className={editor.isActive('heading', { level: 1 }) ? 'is-active' : 'hover:bg-[#2a2a2a]'}
                ><HugeiconsIcon icon={Heading01Icon} /></button>
                <button
                  onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                  className={editor.isActive('heading', { level: 2 }) ? 'is-active' : 'hover:bg-[#2a2a2a]'}
                ><HugeiconsIcon icon={Heading02Icon} /></button>
                <button
                  onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                  className={editor.isActive('heading', { level: 3 }) ? 'is-active' : 'hover:bg-[#2a2a2a]'}
                ><HugeiconsIcon icon={Heading03Icon} /></button>
                <button
                  onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
                  className={editor.isActive('heading', { level: 4 }) ? 'is-active' : 'hover:bg-[#2a2a2a]'}
                ><HugeiconsIcon icon={Heading04Icon} /></button>
              </div>
              {/* grupo font */}
              <div className="button-group bg-[#0f0f0f] p-1 rounded-sm">
                <button
                  onClick={() => editor.chain().focus().toggleBold().run()}
                  className={editor.isActive('bold') ? 'is-active' : ''}
                >
                  <HugeiconsIcon icon={TextBoldIcon} />
                </button>
                <button
                  onClick={() => editor.chain().focus().toggleItalic().run()}
                  className={editor.isActive('italic') ? 'is-active' : ''}
                >
                  <HugeiconsIcon icon={TextItalicIcon} />
                </button>
                <button
                  onClick={() => editor.chain().focus().toggleStrike().run()}
                  className={editor.isActive('strike') ? 'is-active' : ''}
                >
                  <HugeiconsIcon icon={TextStrikethroughIcon} />
                </button>
                <button
                  onClick={() => editor.chain().focus().toggleUnderline().run()}
                  className={editor.isActive('underline') ? 'is-active' : ''}
                >
                  <HugeiconsIcon icon={TextUnderlineIcon} />
                </button>
              </div>
              {/* grupo aling text */}
              <div className="button-group bg-[#0f0f0f] p-1 rounded-sm">
                <button
                  onClick={() => editor.chain().focus().setTextAlign('left').run()}
                  className={editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}
                >
                  <HugeiconsIcon icon={TextAlignLeftIcon} />
                </button>
                <button
                  onClick={() => editor.chain().focus().setTextAlign('center').run()}
                  className={editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}
                >
                  <HugeiconsIcon icon={TextAlignCenterIcon} />
                </button>
                <button
                  onClick={() => editor.chain().focus().setTextAlign('right').run()}
                  className={editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}
                >
                  <HugeiconsIcon icon={TextAlignRightIcon} />
                </button>
                <button
                  onClick={() => editor.chain().focus().setTextAlign('justify').run()}
                  className={editor.isActive({ textAlign: 'justify' }) ? 'is-active' : ''}
                >
                  <HugeiconsIcon icon={TextAlignJustifyCenterIcon} />
                </button>
              </div>
              {/* grupo de toggle list */}
              <div className="button-group bg-[#0f0f0f] p-1 rounded-sm">
                <button
                  onClick={() => editor.chain().focus().toggleBulletList().run()}
                  className={editor.isActive('bulletList') ? 'is-active' : ''}
                >
                  <HugeiconsIcon icon={LeftToRightListBulletIcon} />
                </button>
                <button
                  onClick={() => editor.chain().focus().toggleOrderedList().run()}
                  className={editor.isActive('orderedList') ? 'is-active' : ''}
                >
                  <HugeiconsIcon icon={LeftToRightListNumberIcon} />
                </button>
                <button
                  onClick={() => editor.chain().focus().toggleBlockquote().run()}
                  className={editor.isActive('blockquote') ? 'is-active' : ''}
                >
                  <HugeiconsIcon icon={LeftToRightBlockQuoteIcon} />
                </button>
                <button
                  onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                  className={editor.isActive('codeBlock') ? 'is-active' : ''}
                >
                  <HugeiconsIcon icon={SourceCodeSquareIcon} />
                </button>
                <button
                  onClick={() => editor.chain().focus().toggleCode().run()}
                  className={editor.isActive('code') ? 'is-active' : ''}
                >
                  <HugeiconsIcon icon={SourceCodeIcon} />
                </button>
              </div>
            </div>
          </div>
        </div>
      }
      <div className='codeEditor text-white w-full h-full min-h-[500px] p-8 border-2 border-black mt-5 mb-10'>
        <EditorContent editor={editor} />
      </div>
      {
        edit && <button onClick={handleUpdateNote} className="bg-[#090909] text-2xl font-bold rounded-lg text-[#aaa] hover:text-[#eee] w-full py-4 cursor-pointer">Update</button>
      }
    </div>
  )
}

export default ViewNote