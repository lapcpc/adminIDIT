import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { HomeIcon } from '@heroicons/react/24/solid'
import SidebarRow from './SidebarRow'
import Desplegable from './Desplegable'
import CuadroDespegable from './CuadroDespegable'
// Barra lateral 
const Sidebar = () => {
    const [active, setActive]=useState(false)
    
    const desactivar = () =>{
        setActive(!active)
    }
   
  return (
    <div  className='hidden space-y-6 sm:block  flex-row bg-white border-r border-gray-300   min-w-full h-full lg:pr-6'>
        <div className='flex justify-center py-10'>
            <div className='inline'>
                <img src='https://cdn-icons-png.flaticon.com/512/8378/8378440.png' className='w-8 h-8 inline'/>
            </div>
          
        </div>
            
       
        <div>
            <div className='flex justify-center '>
            <Link href="/">
            <SidebarRow Icon={HomeIcon} text="Inicio" />     
            </Link> 
            
            </div>
            
           
        </div>
        {/* Menu desplegable con las categorias */}
        <Desplegable accion={desactivar} activo={active}/>
        <CuadroDespegable activo={active}/>
        
        
      
    </div>
  )
}

export default Sidebar