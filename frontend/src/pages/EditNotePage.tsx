import { useParams } from "react-router"
import { useTokenStore } from "../store/useTokenStore";
import { useEffect, useState } from "react";
import ViewNote from "../components/ViewNote";
import Back from "../components/Back";
import { Toaster } from "sonner";

interface Note {
  readonly id: number
  title: string
  content?: string
  createdAt?: string
}

function EditNotePage() {
  const { noteId } = useParams()
  const [note, setNote] = useState<Note | null>(null)
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
    <div className="relative min-h-screen flex flex-col justify-center items-center px-10 pt-28 bg-[#1e1e20aa]">
      <Toaster richColors />
      <Back />

      <div className="w-full max-w-6xl flex flex-col justify-center items-center gap-10 mb-10">
        {/* tools */}
        <div className="w-full">
          <ViewNote edit={true} note={note} />
        </div>
      </div>
    </div>
  )
}

export default EditNotePage