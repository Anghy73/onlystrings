import type { User } from "../types"

type getEditNote = {
  noteId: number,
  user: User | null
}


export const getEditNote = async ({noteId, user} : getEditNote) => {
  console.log('por aqui');
  
  const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/notes/note/${noteId}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      'Authorization': `Bearer ${user?.token}`,
    },
  })
  const json = await res.json()
  return json.note[0]
}