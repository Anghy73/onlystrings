import { useEffect } from "react";
import { useUserStore } from "../store/useUserStore"
import ListNotes from "../components/ListNotes";
import { useNotesStore } from "../store/useNotesStore";
import ShowAlert from "../components/ShowAlert";
import { Toaster } from "sonner";

const Notes = () => {
  const user = useUserStore(state => state.user)
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
      <Toaster richColors />
    </div>
  )
}

export default Notes