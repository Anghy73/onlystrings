import { useEffect } from "react";
import { useTokenStore } from "../store/useTokenStore"
import ListNotes from "../components/ListNotes";
import { useNotesStore } from "../store/useNotesStore";

const Notes = () => {
  const user = useTokenStore(state => state.user)
  const getAllNotes = useNotesStore(state => state.getAllNotes)
  const notes = useNotesStore(state => state.notes)

  useEffect(() => {
    getAllNotes(user)
  }, [])

  // console.log(notes);

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
    <div className="flex flex-col w-full h-full pt-40">
      {/* <NoteItem note={notes[0]}  /> */}
      {
        user == null ? <p>You need login for show notes</p> : notes.length >= 1 ? <ListNotes /> : <p>Don't have notes</p>
      }
    </div>
  )
}

export default Notes