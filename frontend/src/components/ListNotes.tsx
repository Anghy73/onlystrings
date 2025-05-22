import { Link } from "react-router";
import PreviewNote from "./PreviewNote";
import { HugeiconsIcon } from "@hugeicons/react";
import { Delete02Icon, Edit04Icon } from "@hugeicons/core-free-icons";
import { useState } from "react";

interface Note {
  id: number
  title: string
  content: string
  createdAt: string
}

function ListNotes({ notes }: { notes: Note[] }) {

  const [showModalDelete, setShowModalDelete] = useState(false)

  const handleShowModalDelete = () => {
    console.log('si');
    // console.log(value);
    setShowModalDelete(!showModalDelete)
  }

  console.log(notes);
  return (
    <div className="relative grid grid-cols-1 sm:grid-cols-2 justify-center w-full md:grid-cols-2 lg:grid-cols-3 gap-10">
      {
        showModalDelete && <div className="absolute flex flex-col justify-evenly items-center top-1/5 left-0 bg-gray-900 w-full h-50 z-10">
          <h5>Modal Delete Note</h5>
          <div className="flex gap-10">
            <button onClick={handleShowModalDelete} className="border-3 border-gray-500 p-2 px-4">Cancel</button>
            <button onClick={handleShowModalDelete} className="border-3 border-red-400 p-2 px-4">Delete</button>
          </div>
        </div>
      }
      {
        notes.map(note => (
          <div key={note.id} className="w-full grid grid-cols-5 place-items-stretch gap-2">
            <div className="col-span-4 flex flex-col gap-4 border-3 border-gray-800 rounded-md w-full">
              <Link className="px-4 py-2" to={`/notePage/${note.id}`}>
                <h3 className="text-3xl font-medium text-nowrap overflow-clip">{note.title}</h3>
                <div className="h-30 overflow-clip">
                  {/* <p className="text-md text-gray-400 text-balance">{note.content}</p> */}
                  <PreviewNote note={note} />
                </div>
                <p className="text-end text-gray-600">{note.createdAt}</p>
              </Link>
            </div>
            <div className="w-full flex  flex-col gap-2 max-w-16">
              <button className="flex justify-center items-center border-3 border-gray-800 flex-1 rounded-md cursor-pointer">
                <HugeiconsIcon icon={Edit04Icon} />
              </button>
              <button onClick={handleShowModalDelete} className="flex justify-center items-center border-3 border-gray-800 flex-1 rounded-md cursor-pointer">
                <HugeiconsIcon icon={Delete02Icon} />
              </button>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default ListNotes