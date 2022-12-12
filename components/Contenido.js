import React from 'react'
import Modal from './Modal'
//Contenido de la pagina principal
function Contenido() {

  return (
    
    <div className='col-span-7 sm:col-span-6 bg-gray-100 space-y-5  h-full w-auto'>
      
      <div className='py-10 border shadow-sm border-gray-200 rounded-md bg-white mx-5 my-10'>
        <h1 className='pl-10 text-2xl'>Bienvenido al Administrador de la app IDIT</h1>

      </div>
      <div className='py-2 border shadow-sm border-gray-200 rounded-md bg-white mx-5 my-10'>
        <h1 className='pl-10 text-xl text-red-400'>Alertas</h1>
        <p className='pl-10 py-5 text-base'>No hay alertas</p>

      </div>
      
    </div>
  )
}

export default Contenido