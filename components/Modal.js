import React from 'react'
import { useState } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid';
//Modal para saber si estas seguro de elminar una categoria 
function Modal({accion, mostrar, estado}) {
    
    //Cierra el modal
    const cambiar = () =>{
        estado()
    }
    //Evita que los evento onClick de un padre se realicen en un hijo
    const hijo =(e) =>{
        e.preventDefault();
        e.stopPropagation();
    }
    //Elimina la categoria
    const eliminar = ()=> {
            accion()
    }
  return (
    <div onClick={cambiar} className={`absolute w-screen h-screen bg-opacity-50 bg-gray-500 z-10 inset-0 ${!mostrar ? "hidden": "inherit"}`}>
        <div onClick={hijo} className='rounded-md w-[300px] h-[300px] bg-opacity-100 bg-white absolute z-20 inset-x-20 sm:inset-x-1/3  inset-y-1/4'>
            
            <div className='justify-end block'>
                <div className='hidden shadow-md bg-red-500  absolute top-1 left-[85%] p-2  rounded-full'>
                     <XMarkIcon className='hidden font-extrabold text-white rounded-full mx-[1.5px]  w-5 h-5    text-base cursor-pointer'   />
                </div>
            </div>           
            <div className='mt-14'>
                <p className='text-black mt-10 text-2xl text-center'>Estas seguro que deseas eliminar una categoria?</p>
                <div >

                    <div className=' mx-auto w-min flex-col'>
                        <div className=' w-max space-x-3 mt-14'>
                        <button onClick={eliminar} className='p-3 bg-red-500 rounded-2xl px-6 text-white '>Si</button>
                    <button onClick={cambiar} className='p-3 border border-zinc-400  rounded-2xl px-5 text-black
                    '>No</button>
                        </div>
                   
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Modal