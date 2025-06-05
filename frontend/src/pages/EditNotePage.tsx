import { useParams } from "react-router"
import { useUserStore } from "../store/useUserStore";
import { useEffect, useState } from "react";
import ViewNote from "../components/ViewNote";
import Back from "../components/Back";
import { Toaster } from "sonner";
import { getEditNote } from "../services/getEditNote";

interface Note {
  readonly id: number
  title: string
  content?: string
  createdAt?: string
}

function EditNotePage() {
  const { noteId } = useParams()
  const [note, setEditNote] = useState<Note | null>(null)
  const user = useUserStore(store => store.user)

  useEffect(() => {
    const getNote = async () => {
      const note = await getEditNote({ noteId: Number(noteId), user: user })
      setEditNote(note)
    }
    getNote()
  }, [noteId, user?.token, user])

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