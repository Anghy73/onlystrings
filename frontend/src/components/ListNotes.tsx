
interface Note {
  id: number
  title: string
  content: string
  createdAt: string
}

function ListNotes({ notes }: { notes: Note[] }) {
  console.log(notes);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 justify-center w-full md:grid-cols-2 lg:grid-cols-3 gap-10">
      {
        notes.map(note => (
          <div key={note.id} className="w-full grid grid-cols-5 place-items-stretch gap-2">
            <div className="col-span-4 flex flex-col gap-4 border-3 border-gray-800 rounded-md px-4 w-full py-2">
              <h3 className="text-3xl font-medium text-nowrap">{note.title}</h3>
              <div className="h-30 overflow-clip">
                <p className="text-md text-gray-400 text-balance">{note.content}</p>
              </div>
              <p className="self-end text-gray-600">{note.createdAt}</p>
            </div>
            <div className="w-full flex  flex-col gap-2 max-w-16">
              <button className="flex justify-center items-center border-3 border-gray-800 flex-1 rounded-md cursor-pointer">icon</button>
              <button className="flex justify-center items-center border-3 border-gray-800 flex-1 rounded-md cursor-pointer">icon</button>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default ListNotes