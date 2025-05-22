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

  const notas = [
    {
      id: 1,
      title: 'dkasjd',
      content: "dasd",
      createdAt: "12/54/5433"
    },
    {
      id: 2,
      title: 'dkasjd',
      content: "dasd",
      createdAt: "12/54/5433"
    },
    {
      id: 3,
      title: 'dkasjd',
      content: "dasd",
      createdAt: "12/54/5433"
    },
    {
      id: 4,
      title: 'dkasjd',
      content: "dasd",
      createdAt: "12/54/5433"
    },
    {
      id: 5,
      title: 'dkasjd',
      content: "dasd",
      createdAt: "12/54/5433"
    },
    {
      id: 6,
      title: 'dkasjd',
      content: "dasd",
      createdAt: "12/54/5433" 
    },
    {
      id: 7,
      title: 'dkasjd',
      content: "dasd",
      createdAt: "12/54/5433"
    },
  ]


  return (
    <div className="flex flex-col w-full h-full pt-40">
      {
        user != null ? <p>You need login for show notes</p> : notas.length >= 1 ? <ListNotes notes={notas} /> : <p>Don't have notes</p>
      }
    </div>
  )
}

export default Notes