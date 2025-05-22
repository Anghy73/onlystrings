import { useEffect, useState } from "react";
import { Link, useParams } from "react-router"
import { useTokenStore } from "../store/useTokenStore";
import ViewNote from "../components/ViewNote";

interface Note {
  id: number
  title: string
  content: string
  createdAt: string
}

function NotePage() {
  const [note, setNote] = useState<Note | undefined>(undefined)
  const { noteId } = useParams()
  console.log(noteId);
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

  console.log(note);

  return (
    <>
      <div>NotePage</div>
      <Link to="/">
        <button className="bg-red-300 my-10 ml-10">Volver</button>
      </Link>
      <div className="bg-red-200">
        <ViewNote note={note} />
      </div>
    </>
  )
}

export default NotePage