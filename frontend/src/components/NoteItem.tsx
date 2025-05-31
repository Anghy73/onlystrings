import { Delete02Icon, Edit04Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { Link } from "react-router"
import PreviewNote from "./PreviewNote"
import { useNotesStore } from "../store/useNotesStore"
import { Suspense } from "react"

interface Note {
  readonly id: number
  title: string
  content?: string
  createdAt?: string
}

function NoteItem({ note }: { note: Note }) {
  const deleteNote = useNotesStore(state => state.deleteNote)
  // console.log(note);

  const handleDeleteNote = () => {
    deleteNote(note.id)
  }

  return (
    <div key={note.id} className="w-full grid grid-cols-5 place-items-stretch gap-2">



      <div className="col-span-4 flex flex-col gap-4 border-3 border-gray-800 rounded-md w-full">
        <Link className="px-4 py-2" to={`/notePage/${note.id}`}>
          <h3 className="text-3xl font-medium text-nowrap overflow-clip">{note.title}</h3>
          <div className="h-30 overflow-clip">
            <Suspense fallback={<div>Cargando...</div>}>
              <PreviewNote note={note} />
            </Suspense>
          </div>
          <p className="text-end text-gray-600">{note.createdAt}</p>
        </Link>
      </div>



      <div className="w-full flex flex-col gap-2 max-w-16">
        <Link className="flex justify-center items-center border-3 border-gray-800 flex-1 rounded-md cursor-pointer" to={`/editNotePage/${note.id}`}>
          <button>
            <HugeiconsIcon icon={Edit04Icon} />
          </button>
        </Link>
        <button onClick={handleDeleteNote} className="flex justify-center items-center border-3 border-gray-800 flex-1 rounded-md cursor-pointer">
          <HugeiconsIcon icon={Delete02Icon} />
        </button>
      </div>
    </div>
  )
}

export default NoteItem