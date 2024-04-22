'use client'
import { Snippet } from 'next/font/google'
import React,{ useState} from 'react'



const page = () => {
  const[marks, setMarks] = useState(80)
  return (
   <>
    <div>
      <h1>hello{marks}</h1>
      <button onClick={ ()=>{
        setMarks(33)
      } }>Update</button>
    </div>
   </>
  )
}

export default page
