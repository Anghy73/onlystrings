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

  return (
    <div className="flex flex-col w-full h-full pt-40">
      {
        user == null && <ShowAlert text="You need to login for show notes" />
      }
      {
        user != null && notes.length == 0 && <ShowAlert text="You don't have notes" />
      }
      {
        user != null && notes.length >= 1 && <ListNotes />
      }
    </div>
  )
}

export default Notes