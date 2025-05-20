
interface Note {
  id: number
  title: string
  content: string
  createdAt: string
}

function ListNotes({ notes }: { notes: Note[] }) {
  console.log(notes);
  return (
    <>
      {
        notes.map(note => (
          <div key={note.id}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <p>{note.createdAt}</p>
          </div>
        ))
      }
    </>
  )
}

export default ListNotes