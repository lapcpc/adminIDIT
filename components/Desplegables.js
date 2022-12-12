import Link from 'next/link'
import React from 'react'

function Desplegables({text}) {
  const note = {id:text}
  return (

    <Link className='block ml-3 py-1 my-1 m-2 bg-gray-200 hover:bg-white hover:border hover:border-gray-300 cursor-pointer rounded-sm pl-2' href='/categoria/[id].js' as={`/categoria/${note.id}`}>
    
        {text}
     
    
    </Link>
  )
}

export default Desplegables