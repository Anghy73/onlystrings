import Document from '@tiptap/extension-document'
import Heading from '@tiptap/extension-heading'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import { EditorContent, useEditor } from "@tiptap/react"
// import StarterKit from "@tiptap/starter-kit"

// const extensions = [StarterKit]
// const content = '<p>Hello World!</p>'

function Tiptap() {
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
        class: 'prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none text-white'
      }
    },
    content: `
        <h1>This is a 1st level heading</h1>
        <h2>This is a 2nd level heading</h2>
        <h3>This is a 3rd level heading</h3>
        <h4>This 4th level heading will be converted to a paragraph, because levels are configured to be only 1, 2 or 3.</h4>
      `,
  })

  if (!editor) {
    return null
  }

  return (
    <>
      <div className='bg-black p-2 rounded-2xl'>
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

      <EditorContent editor={editor}>
        {/* <FloatingMenu editor={null}>This is floating menu</FloatingMenu>
        <BubbleMenu editor={null}>This is Bubble menu</BubbleMenu> */}
      </EditorContent>
    </>
  )
}

export default Tiptap


// import { useCurrentEditor } from '@tiptap/react'

// const EditorJSONPreview = () => {
//   const { editor } = useCurrentEditor()

//   return <pre>{JSON.stringify(editor.getJSON(), null, 2)}</pre>
// }
