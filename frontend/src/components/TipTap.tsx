
import { Editor, EditorContent } from "@tiptap/react"
// import StarterKit from "@tiptap/starter-kit"

// const extensions = [StarterKit]



function Tiptap({ editor }: { editor: Editor | null }) {
  if (!editor) {
    return null
  }

  // const handleSaveNote = () => {
  //   console.log("note")
  // }

  return (
    <div className='flex flex-col gap-10'>
      {/* tools */}
      <div className='flex w-full gap-5'>
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

      {/* content */}
      <div className='bg-white text-black'>
        <EditorContent editor={editor} />
        {/* <EditorProvider extensions={extensions} content={content}> */}
        {/* <FloatingMenu editor={null}>This is floating menu</FloatingMenu>
          <BubbleMenu editor={null}>This is Bubble menu</BubbleMenu> */}
        {/* </EditorProvider> */}
      </div>
    </div>
  )
}

export default Tiptap


// import { useCurrentEditor } from '@tiptap/react'

// const EditorJSONPreview = () => {
//   const { editor } = useCurrentEditor()

//   return <pre>{JSON.stringify(editor.getJSON(), null, 2)}</pre>
// }
