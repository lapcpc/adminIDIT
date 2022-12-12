import React from 'react'
import Sidebar from '../../components/Sidebar'
import ContenidoA from '../../components/ContenidoA'
function index() {
  //Pagina para añadir una categoria
  return (
    <div className='  h-screen flex-col grid grid-cols-6'>
      {/* Menu Lateral  */}
      
      <Sidebar />

    
      
        
      {/* Contenido */}

      <ContenidoA />

   </div>
  )
  
}

export default index