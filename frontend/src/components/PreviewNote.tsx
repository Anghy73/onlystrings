import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { useEffect, useState } from "react"

interface Note {
  readonly id?: number
  title: string
  content?: string
  createdAt?: string
}

function PreviewNote({ note }: { note: Note }) {
  // const [contentNote, setContentNote] = useState<string | undefined>('')

  const editor = useEditor({
    extensions: [StarterKit],
    editable: false,
    editorProps: {
      attributes: {
        class: 'prose max-w-none prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none'
      }
    },
    content: note.content || '',
  })

    useEffect(() => {
    if (editor && note.content !== undefined) {
      editor.commands.setContent(note.content)
    }
  }, [note.content, editor])

  return (
    <>
      <EditorContent editor={editor} />
    </>
  )
}

export default PreviewNote