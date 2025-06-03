import { useEffect, useState } from "react";
import { Link, useParams } from "react-router"
import { useTokenStore } from "../store/useTokenStore";
import ViewNote from "../components/ViewNote";
import Back from "../components/Back";

interface Note {
  id: number
  title: string
  content: string
  createdAt: string
}

function NotePage() {
  const [note, setNote] = useState<Note | null>(null)
  const { noteId } = useParams()
  const user = useTokenStore(store => store.user)

  useEffect(() => {
    const getNote = async () => {
      const res = await fetch(`http://localhost:5600/notes/note/${noteId}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          'Authorization': `Bearer ${user?.token}`,
        },
      })
      const json = await res.json()
      setNote(json.note[0])
    }
    getNote()
  }, [noteId, user?.token])

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