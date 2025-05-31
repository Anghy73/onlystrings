import { Link, useParams } from "react-router"
import { useTokenStore } from "../store/useTokenStore";
import { useEffect, useState } from "react";
import ViewNote from "../components/ViewNote";

interface Note {
  readonly id: number
  title: string
  content?: string
  createdAt?: string
}

function EditNotePage() {
  const { noteId } = useParams()
  // console.log(noteId);
  const [note, setNote] = useState<Note| null>(null)

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

  // console.log(note);

  return (
    <>
      <div>EditNotePage</div>
      <Link to="/">
        <button className="bg-red-300 my-10 ml-10">Volver</button>
      </Link>
      <div className="bg-red-200">
        <h2>{note?.title}</h2>

        {note && <ViewNote edit={true} note={note} />}
      </div>
    </>
  )
}

export default EditNotePage