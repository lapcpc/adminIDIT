import React from 'react'
import Sidebar from '../../components/Sidebar'
import ContenidoC from '../../components/ContenidoC'
import { useRouter } from 'next/router'
function Home() {
  const router = useRouter()
  const { id }= router.query
  return (
    
   <div className='  h-screen flex-col grid grid-cols-6'>
      {/* Menu Lateral  */}
      
      <Sidebar />
     
      <ContenidoC text={id}/>
        
      {/* Contenido */}
   </div>
  )
}

export default Home