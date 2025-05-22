import { useCurrentEditor } from '@tiptap/react'

function NotePage() {
  const { editor } = useCurrentEditor()
  console.log('editorContent: ' + editor);
  return (
    <>
      <div>NotePage</div>
      <pre>{JSON.stringify(editor?.getJSON(), null, 2)}</pre>
    </>
  )
}

export default NotePage