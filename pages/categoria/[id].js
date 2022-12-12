import React from 'react'
import Sidebar from '../../components/Sidebar'
import ContenidoC from '../../components/ContenidoC'
import { useRouter } from 'next/router'
function Home() {
  //Guardado del router en una variable
  const router = useRouter()
  //Extraccion del id para ver una categoria
  const { id }= router.query
  //Pagina para ver y editar una categoría 
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