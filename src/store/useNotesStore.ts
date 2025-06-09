import { create } from "zustand";
import type { Note, User } from "../types";
import { toast } from "sonner";

interface NotesStore {
  notes: Array<Note>
  getAllNotes: (user: User | null) => void
  createNote: ({ note, user }: { note: Note, user: User | null }) => void
  updateNote: ({ note, user }: { note: Note, user: User | null }) => void
  deleteNote: (noteId: number | undefined) => void
}

export const useNotesStore = create<NotesStore>((set, get) => ({
  notes: [],
  getAllNotes: async (user) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/notes/${user?.id}`, {
        headers: {
          'Authorization': `Bearer ${user?.token}`,
          'Content-Type': 'application/json'
        },
      })

      const json = await res.json()
      console.log(json);

      set({ notes: json.notes })
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  },

  createNote: async ({ note, user }) => {
    const getNotes = get().getAllNotes

    console.log(note, user);

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/notes/${user?.id}`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          'Authorization': `Bearer ${user?.token}`,
        },
        body: JSON.stringify(note)
      })
      const json = await res.json()
      if (json) {
        toast.success("note created success")
        getNotes(user)
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
      }
    }
  },

  updateNote: async ({ note, user }) => {
    const getNotes = get().getAllNotes
    const noteId = note.id

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/notes/${noteId}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
          // 'Authorization': `Bearer ${user?.token}`,
        },
        body: JSON.stringify(note)
      })
      const json = await res.json()
      console.log(json);
      toast.success("update success")
      getNotes(user)
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  },

  deleteNote: async (noteId) => {
    console.log(noteId);

    // hacer el filtro en local o ejecuto denuevo el getAllNotes pasandole el noteId y user.
    const notes = get().notes
    const cloneNotes = structuredClone(notes)
    const notesFiltered = cloneNotes.filter(note => note.id != noteId)
    set({ notes: notesFiltered })

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/notes/${noteId}`, {
        method: "DELETE",
        headers: {
          // 'Authorization': `Bearer ${user?.token}`,
        }
      })
      const json = await res.json()
      console.log(json);
      toast.success("delete success")
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  }
}))