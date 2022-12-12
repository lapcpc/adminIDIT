import React from 'react'

function SidebarRow({Icon,text, active}) {
  //Componente que renderiza un icono y su texto
  return (
    <div className='flex justify-center cursor-pointer'  >
        <div className=' justify-center flex-col  grid grid-cols-3 gap-4'>
            
        <Icon className="h-8 w-8 text-black col-span-3 lg:col-span-1 " />
         <p className='mt-1 hidden lg:inline col-span-2  text-base '>{text}</p>
        </div>
       

    </div>
  )
}

export default SidebarRow