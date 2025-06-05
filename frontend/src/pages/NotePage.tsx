import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { useUserStore } from "../store/useUserStore";
import ViewNote from "../components/ViewNote";
import Back from "../components/Back";
import { getEditNote } from "../services/getEditNote";

interface Note {
  id: number
  title: string
  content: string
  createdAt: string
}

function NotePage() {
  const [note, setNote] = useState<Note | null>(null)
  const { noteId } = useParams()
  const user = useUserStore(store => store.user)

  useEffect(() => {
    const getNote = async () => {
      const note = await getEditNote({ noteId: Number(noteId), user: user })
      setNote(note)
    }
    getNote()
  }, [noteId, user?.token, user])

  return (
    <div className="flex justify-center items-center my-20">
      <Back />
      <div className="flex justify-center items-center w-full max-w-5xl">
        <ViewNote edit={false} note={note} />
      </div>
    </div>
  )
}

export default NotePage