import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { useEffect } from "react"

interface Note {
  id: number
  title: string
  content: string
  createdAt: string
}

function ViewNote({ note }: { note: Note | undefined }) {
  console.log(note);

  const editor = useEditor({
    extensions: [StarterKit],
    editable: false,
    editorProps: {
      attributes: {
        class: 'prose max-w-none prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none'
      }
    },
    content: note?.content,
  })

  useEffect(() => {
    if (editor && note?.content) {
      editor.commands.setContent(note.content)
    }
  }, [editor, note])

  return (
    <>
      <div>
        <EditorContent editor={editor} />
      </div>
    </>
  )
}

export default ViewNote