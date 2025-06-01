import { useEffect } from "react";
import { useTokenStore } from "../store/useTokenStore"
import ListNotes from "../components/ListNotes";
import { useNotesStore } from "../store/useNotesStore";
import ShowAlert from "../components/ShowAlert";

const Notes = () => {
  const user = useTokenStore(state => state.user)
  const notes = useNotesStore(state => state.notes)
  const getAllNotes = useNotesStore(state => state.getAllNotes)

  useEffect(() => {
    getAllNotes(user)
  }, [user, getAllNotes])

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
    <div className="flex-col w-full h-full pt-40">
      {
        user == null && <ShowAlert text="You need to login for show notes" />
      }
      {
        notes.length == 0 && <ShowAlert text="You don't have notes" />
      }
      {
        notes.length >= 1 && <ListNotes />
      }
    </div>
  )
}

export default Notes