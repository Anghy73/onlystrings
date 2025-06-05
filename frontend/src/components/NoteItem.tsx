import { Delete02Icon, Edit04Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { Link } from "react-router"
import PreviewNote from "./PreviewNote"
import { useNotesStore } from "../store/useNotesStore"
import { useState } from "react"
import type { Note } from "../types"

function NoteItem({ note }: { note: Note }) {
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const deleteNote = useNotesStore(state => state.deleteNote)
  const handleDeleteNote = () => {
    setShowDeleteModal(!showDeleteModal)
  }

  const fechaSQL = `${note.createdAt}`;
  const fecha = new Date(fechaSQL);
  const fechaFormat = fecha.toLocaleString('es-ES');

  return (
    <div key={note.id} className="w-full grid grid-cols-5 place-items-stretch gap-2">
      <div className="col-span-4 flex flex-col bg-[#0f0f0faf] border-3 border-black rounded-md w-full">
        <Link className="px-4 py-2 flex flex-col gap-3" to={`/notePage/${note.id}`}>
          <h3 className="text-3xl font-medium text-nowrap overflow-y-hidden overflow-x-scroll" title={note.title} >{note.title}</h3>
          <div className="relative w-full h-30 overflow-hidden">
            <div className="absolute top-0 -left-10 w-full h-full scale-70">
              <PreviewNote note={note} />
            </div>
          </div>
          <p className="text-end text-gray-600">{fechaFormat}</p>
        </Link>
      </div>
      {
        showDeleteModal && <div className="fixed inset-0 bg-black/60 bg-opacity-10 z-50 flex items-center justify-center">
          <div className="bg-[#222] text-white p-6 rounded-lg shadow-lg">
            <h5 className="mb-4">Are you sure you want to delete this note?</h5>
            <div className="flex gap-4 justify-center items-stretch">
              <button onClick={() => deleteNote(note.id)} className="cursor-pointer flex-1 rounded-xl border-3 border-red-400 text-red-400 font-semibold hover:text-red-500 hover:border-red-500 transition-all px-4 py-2">Delete</button>
              <button onClick={() => setShowDeleteModal(false)} className="cursor-pointer flex-1 rounded-xl border-3 border-gray-300 text-gray-300 hover:text-gray-100 hover:border-gray-100 px-4 py-2">Cancel</button>
            </div>
          </div>
        </div>
      }

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