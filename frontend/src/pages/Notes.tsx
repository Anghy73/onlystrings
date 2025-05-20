import { useEffect, useState } from "react";
import { useTokenStore } from "../store/useTokenStore"
import ListNotes from "../components/ListNotes";

const Notes = () => {
  const [notes, setNotes] = useState([])
  const user = useTokenStore(state => state.user)
  console.log(user);


  useEffect(() => {
    const getAllNotes = async () => {
      try {
        console.log('hi');
        const res = await fetch(`http://localhost:5600/notes/${user?.id}`, {
          headers: {
            'Authorization': `Bearer ${user?.token}`,
            'Content-Type': 'application/json'
          },
        })
        const json = await res.json()
        console.log(json);
        setNotes(json.notes)
      } catch (error) {
        if (error instanceof Error) {
          console.log(error);
        }
      }
    }
    getAllNotes()
  }, [user?.id, user?.token])

  console.log(notes);
  

  return (
    <div className="flex flex-col">
      <h2 className="text-2xl mb-10">Notes</h2>
      {
        notes.length >= 1 ? <ListNotes notes={notes} /> : <p>Don't have notes</p>
      }
      {/* {
        notes.length >= 1 ? <>
          {
            notes.map(note => (
              <div key={note.id}>
                <h3>{note.title}</h3>
                <p>{note.content}</p>
              </div>
            ))
          }
        </> : <p>no hay notas</p>
      } */}
    </div>
  )
}

export default Notes