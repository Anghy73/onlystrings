import type { User } from "../types"

type getEditNote = {
  noteId: number,
  user: User | null
}


export const getEditNote = async ({noteId, user} : getEditNote) => {
  const res = await fetch(`http://localhost:5600/notes/note/${noteId}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      'Authorization': `Bearer ${user?.token}`,
    },
  })
  const json = await res.json()
  return json.note[0]
}