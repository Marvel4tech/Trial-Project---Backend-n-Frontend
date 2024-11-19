import React, { useEffect, useState } from 'react'
import api from '../config/api'

const NoteApp = () => {
   const [notes, setNotes] = useState([])

   const fetchNotes = async () => {
     try {
        const response = await api.get("/");
        console.log(response.data)
        setNotes(response.data)
     } catch (error) {
        console.log(error)
     }
   }

   useEffect(() => {
        fetchNotes()
   }, [])

  return (
    <div className=' bg-gray-950 max-w-4xl mx-auto h-full border border-yellow-400 rounded-md p-10'>
        <div>
            <h1 className='text-4xl font-bold text-white text-center'>Your Notes</h1>
            <div className=' mt-5 flex'>
                <input 
                    type="text"
                    className=' flex-[2] py-1 px-4 rounded-tl-md rounded-bl-md outline-none focus-within:text-green-600'
                    placeholder=' add a new note...'
                />
                <button className=' bg-green-600 text-white hover:bg-green-700 flex-[1] py-1 rounded-tr-md rounded-br-md 
                font-semibold'>
                    Add Note
                </button>
            </div>
            <div className=' mt-10'>
                <ul className=' space-y-3'>
                   {
                     notes.map((note) => (
                        <li key={note._id} className=' w-full flex justify-between'>
                            <p className=' text-black bg-gray-300 text-sm px-4 py-1 rounded-sm'>
                                {note.text}
                            </p>
                            <div className=' flex gap-2'>
                                <button className=' bg-gray-600 hover:bg-gray-700 text-sm py-1 px-3 text-slate-200 rounded-md'>
                                    Edit
                                </button>
                                <button className=' bg-red-600 hover:bg-red-700 text-sm py-1 px-3 text-slate-200 rounded-md'>
                                    Delete
                                </button>
                            </div>
                        </li>
                     ))
                   }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default NoteApp