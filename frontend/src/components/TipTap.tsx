import { ArrowTurnBackwardIcon, ArrowTurnForwardIcon, Heading01Icon, Heading02Icon, Heading03Icon, Heading04Icon, LeftToRightBlockQuoteIcon, LeftToRightListBulletIcon, LeftToRightListNumberIcon, SourceCodeIcon, SourceCodeSquareIcon, TextAlignCenterIcon, TextAlignJustifyCenterIcon, TextAlignLeftIcon, TextAlignRightIcon, TextBoldIcon, TextItalicIcon, TextStrikethroughIcon, TextUnderlineIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { Editor, EditorContent } from "@tiptap/react"

function Tiptap({ editor }: { editor: Editor | null }) {
  if (!editor) {
    return null
  }

  return (
    <div className='flex flex-col gap-10'>
      {/* tools */}
      <div className='sticky top-4 z-10 w-full gap-5'>
        {/* contenedor de las herraminetas */}
        <div className='w-full p-4 bg-[#050505] rounded-md'>
          {/* donde se contienen a todos lo grupos */}
          <div className="control-group flex flex-wrap justify-center gap-2">
            {/* grupo de undo/redo */}
            <div className="heading-button-group bg-[#0f0f0f] p-1 rounded-sm">
              <button onClick={() => editor.chain().focus().undo().run()} disabled={!editor.can().undo()}>
                <HugeiconsIcon icon={ArrowTurnBackwardIcon} />
              </button>
              <button onClick={() => editor.chain().focus().redo().run()} disabled={!editor.can().redo()}>
                <HugeiconsIcon icon={ArrowTurnForwardIcon} />
              </button>
            </div>
            {/* grupo de heading */}
            <div className="heading-button-group bg-[#0f0f0f] p-1 rounded-sm">
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
            <div className="heading-button-group bg-[#0f0f0f] p-1 rounded-sm">
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
            <div className="heading-button-group bg-[#0f0f0f] p-1 rounded-sm">
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
            <div className="heading-button-group bg-[#0f0f0f] p-1 rounded-sm">
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
              {/* <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
                <HugeiconsIcon icon={SolidLine01Icon} />
              </button> */}
            </div>
          </div>
        </div>
        {/* <div onClick={handleSaveNote} className='flex justify-center items-center border-3 border-black rounded-lg cursor-pointer px-5'>✅</div> */}
      </div>

      {/* content */}
      <div className='text-white bg-black w-full h-full min-h-[500px] p-4'>
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
