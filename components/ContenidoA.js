import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { addCategoria } from '../firebase/firebaseService';

function ContenidoA() {
  const color = "#00A2FF";
  const router = useRouter()
  const [datos, setDatos] = useState({
    descripcion:'',
    color:'#00A2FF',
    imgen: '',
    nombre:''


  })
  const handleChange = (event)=>{
    setDatos({
      ...datos,
      [event.target.name] : event.target.value
  })
  }
  const handleSubmit = async(e)=>{
    e.preventDefault();
    console.log(datos)
    
    addCategoria(datos)
    
    router.replace("/");
  } 
  return (
    <div className='col-span-6 sm:col-span-5 bg-gray-100   h-full w-auto'>

    <div className='space-y-5 w-[100%] sm:w-[90%] lg:w-[70%] mx-auto'>
    {/*  */}
        <div className="w-full  mt-10">
          
      <form  className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className='mx-auto max-w-xs text-center'>
                    Add Categoria 
                  </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Nombre
          </label>
          <input name="nombre"  onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Nombre" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Descripcion
          </label>
          <input name="descripcion"  onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Descripcion" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Imagen
          </label>
          <input name="imgen" onChange={handleChange} className="shadow appearance-none border border-white rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="Imagen" />
          
        </div>
        <div className="flex items-center justify-between">
          <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Add
          </button>
        
        </div>
      </form>
     
    </div>
    {/*  */}


    </div>
    
    
  </div>
  )
}

export default ContenidoA