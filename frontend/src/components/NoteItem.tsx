import { Delete02Icon, Edit04Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { Link } from "react-router"
import PreviewNote from "./PreviewNote"
import { useNotesStore } from "../store/useNotesStore"

interface Note {
  readonly id: number
  title: string
  content?: string
  createdAt?: string
}

function NoteItem({ note }: { note: Note }) {
  const deleteNote = useNotesStore(state => state.deleteNote)
  const handleDeleteNote = () => {
    deleteNote(note.id)
  }

  const fechaISO = `${note.createdAt}`;
  const fecha = new Date(fechaISO);
  const fechaFormat = fecha.toLocaleString('es-ES');

  return (
    <div key={note.id} className="w-full grid grid-cols-5 place-items-stretch gap-2">
      <div className="col-span-4 flex flex-col bg-[#0f0f0faf] border-3 border-black rounded-md w-full">
        <Link className="px-4 py-2 flex flex-col gap-3" to={`/notePage/${note.id}`}>
          <h3 className="text-3xl font-medium text-nowrap overflow-y-hidden overflow-x-scroll" title={note.title} >{note.title}</h3>
          <div className="relative w-full h-30 overflow-hidden">
            <div className="absolute w-full h-full -top-8 -left-18 scale-50">
              <PreviewNote note={note} />
            </div>
          </div>
          <p className="text-end text-gray-600">{fechaFormat}</p>
        </Link>
      </div>

      <div className="w-full flex flex-col gap-2 max-w-16">
        <Link className="flex justify-center items-center bg-[#0f0f0f] border-3 border-black flex-1 rounded-md cursor-pointer hover:text-cyan-400 transition-colors" to={`/editNotePage/${note.id}`}>
          <button className="cursor-pointer">
            <HugeiconsIcon icon={Edit04Icon} />
          </button>
        </Link>
        <button onClick={handleDeleteNote} className="flex justify-center items-center bg-[#0f0f0f] border-3 border-black flex-1 rounded-md cursor-pointer hover:text-red-400 transition-colors">
          <HugeiconsIcon icon={Delete02Icon} />
        </button>
      </div>
    </div>
  )
}

export default NoteItem