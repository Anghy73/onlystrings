import { useNotesStore } from "../store/useNotesStore";
import NoteItem from "./NoteItem";
// import { useTokenStore } from "../store/useTokenStore";

// interface Note {
//   readonly id: number
//   title: string
//   content?: string
//   createdAt?: string
// }

function ListNotes() {

  // const [noteId, setNoteId] = useState<number | null>(null)

  // const user = useTokenStore(state => state.user)
  const notes = useNotesStore(state => state.notes)
  // console.log(notes);
  // const getAllNotes = useNotesStore(state => state.getAllNotes)

  // useEffect(() => {
  //   console.log('efect en lisntoes');

  //   getAllNotes(user)
  // }, [user, getAllNotes])
  // const deleteNote = useNotesStore(state => state.deleteNote)

  // const [showModalDelete, setShowModalDelete] = useState(false)

  // const handleShowModalDelete = (noteIddel: number | null) => {
  //   setNoteId(noteIddel)
  //   setShowModalDelete(!showModalDelete)
  // }

  // const handleDeleteNote = async () => {
  //   deleteNote(noteId)
  //   setShowModalDelete(false)
  // }

  console.log(notes);

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
    <div className="grid grid-cols-1 sm:grid-cols-2 justify-center w-full md:grid-cols-2 lg:grid-cols-3 gap-10">
      {
        notes.map(note => (
          <NoteItem key={note.id} note={note} />
        ))
      }
    </div>
  )
}

export default ListNotes