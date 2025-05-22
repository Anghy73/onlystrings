import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"

interface Note {
  id: number
  title: string
  content: string
  createdAt: string
}

function PreviewNote({ note }: { note: Note | undefined }) {
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

  return (
    <>
      <EditorContent editor={editor} />
    </>
  )
}

export default PreviewNote