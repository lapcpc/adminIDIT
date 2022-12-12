import React from 'react'
import { useState } from 'react'
import { XMarkIcon, TrashIcon } from '@heroicons/react/24/solid';
import { updateMaquina } from '../firebase/firebaseService';
import { deleteDoc, doc } from 'firebase/firestore'
import { useRouter } from 'next/router';
import { db } from '../firebase/firebase'
//Modal para realizar una actualización de una maquina o eliminarla
function Modal2({tipo, info,accion, mostrar, estado,nombre}) {
  //Bandera para saber si de verdad quieres borrar la maquina
 const [deleteFlag, setDeleteFlag] = useState(false)
 //Outline de datos previo a la actualizacino
  const [datos, setDatos] = useState({
    descripcion:'',
    color:'#00A2FF',
    imgen: '',
    nombre: '',
    disponibilidad: true,



  })
  const router = useRouter()
  //Funcion para eliminar maquina
  const deleteMaquina = async() =>{
    //tipo es el area de la maquina
    let isobasa = "maquinas" + tipo
    //Al igual que tipo info viende los props del componente
    //tipo son los datos de la maquina 
    await deleteDoc(doc(db, isobasa, info.nombre));
    router.replace("/");
}
//Funcion para administrar inputs
  const handleChange = (event)=>{
    setDatos({
      ...datos,
      [event.target.name] : event.target.value
  })
  }
  //Funcion que se realiza cuando se envia el formualrio 
  const handleSubmit = async(e)=>{
    e.preventDefault();

    console.log(info)
    
    setDatos((prevState) => {
      return {
        ...prevState,
        [nombre]: info.nombre,
      };
    });
    
    console.log(datos)
    let temp= datos
    temp.nombre = info.nombre

    console.log(temp)
    //Se añade el nombre de la informacino proporcinoada por parametros y luego se envia realiza la actualizacino
  

  updateMaquina(temp, tipo)

    //Se regresa a la pagina principal
    router.replace("/");

 
  } 



    //Ciera modal
    const cambiar = () =>{
        estado()
    }
    //La funcion hijo previende que la funcion onClick del padre sea ejecutada en el hijo
    const hijo =(e) =>{
        e.preventDefault();
        e.stopPropagation();
    }
    const eliminar = ()=> {
            accion()
    }
  return (
    <div onClick={cambiar} className={`absolute w-screen h-screen min-h-screen bg-opacity-50 bg-gray-500 z-10 inset-0 ${!mostrar ? "hidden": "inherit"}`}>
        <div onClick={hijo} className='rounded-md w-[500px] h-[500px] bg-opacity-100 bg-white absolute z-20 inset-x-20 sm:inset-x-1/3  inset-y-1/4'>
            
                  
            <div className='mt-14 '>
            <div className="bg-white w-full max-w-md mx-auto border mt-10 ">
                  <div>
                    <div className='mx-auto w-fit text-center flex flex-row space-x-2 py-2'>
                      <p> Editar {info.nombre} </p>
                      <TrashIcon className='w-7 h-7 text-red-500 cursor-pointer' onClick={()=> setDeleteFlag(true)} />
                    </div>
                  </div>
                {/* Renderizado condicional dependiendo si quieres actualizar o eliminar la maquina */}
                {!deleteFlag ? (<>
                  <form  className=" shadow-md rounded px-8 pt-6 pb-8 mb-4">
                  
                 
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
                  <div className="flex items-center justify-center">
                    <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                      Update
                    </button>
                  
                  </div>
                </form>
                </>):(<>
                  <div className=' flex flex-col my-2 '>
                      <p className='text-lg text-center my-2'>Estas seguro que deseas eliminar esta maquina</p>
                      <br></br>
                      <div className='flex flex-row space-x-2 justify-center'>
                          <button className='px-8 py-2 text-white bg-red-500 rounded-full' onClick={deleteMaquina}>
                            Si
                          </button>
                          <button className='px-6 py-2 border-2 rounded-full' onClick={()=> setDeleteFlag(false)} >
                            No
                          </button>

                      </div>

                  </div>
                </>) }
               
                
              </div>
            </div>
            
        </div>
    </div>
  )
}

export default Modal2