import { useNotesStore } from "../store/useNotesStore";
import NoteItem from "./NoteItem";
function ListNotes() {
  const notes = useNotesStore(state => state.notes)
  // const notas = [
  //   {
  //     id: 1,
  //     title: 'dkasjd',
  //     content: "dasd",
  //     createdAt: "12/54/5433"
  //   },
  //   {
  //     id: 2,
  //     title: 'dkasjd',
  //     content: "dasd",
  //     createdAt: "12/54/5433"
  //   },
  //   {
  //     id: 3,
  //     title: 'dkasjd',
  //     content: "dasd",
  //     createdAt: "12/54/5433"
  //   },
  //   {
  //     id: 4,
  //     title: 'dkasjd',
  //     content: "dasd",
  //     createdAt: "12/54/5433"
  //   },
  //   {
  //     id: 5,
  //     title: 'dkasjd',
  //     content: "dasd",
  //     createdAt: "12/54/5433"
  //   },
  //   {
  //     id: 6,
  //     title: 'dkasjd',
  //     content: "dasd",
  //     createdAt: "12/54/5433"
  //   },
  //   {
  //     id: 7,
  //     title: 'dkasjd',
  //     content: "dasd",
  //     createdAt: "12/54/5433"
  //   },
  // ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 justify-center w-full md:grid-cols-2 lg:grid-cols-2 gap-10">
      {
        notes.map(note => (
          <NoteItem key={note.id} note={note} />
        ))
      }
    </div>
  )
}

export default ListNotes