import React, { useEffect, useState } from 'react'
import { ChevronDownIcon,ChevronUpIcon, TrashIcon  } from '@heroicons/react/24/solid'
import { useRouter } from 'next/router'
import { deleteDoc, doc } from 'firebase/firestore'
import { db } from '../firebase/firebase'
import Lista from './Lista'
import { addMaquina, getMaquinasCategoria } from '../firebase/firebaseService'
import Modal from './Modal'
import Modal2 from './Modal2'
function ContenidoC({text}) {

  const [mostrar, setMostrar] = useState(false) 
  const [mostrar2, setMostrar2] = useState(false) 
  const [temporal, setTemporal] = useState({nombre: ""})

  const [datos, setDatos] = useState({
    descripcion:'',
    color:'#00A2FF',
    imgen: '',
    nombre:'',
    disponibilidad: true,



  })
  const actualizarTemporal = (x) => {
      setTemporal(x)
      console.log("Actualizacion realizada")
      console.log(temporal)
  }
  const handleChange = (event)=>{
    setDatos({
      ...datos,
      [event.target.name] : event.target.value
  })
  }
  const handleSubmit = async(e)=>{
    e.preventDefault();
    console.log(datos)
    addMaquina(datos, text)
    
    router.replace("/");
  } 


  const [section1, setSection1] = useState(true)
  const [section2, setSection2] = useState(true)
  const [maquinas, setMaquinas] = useState(null)
  const router = useRouter();
  const deleteCategoria = async() =>{
    console.log(text)
    await deleteDoc(doc(db, "Areas", text));
    router.replace("/");
  }

  useEffect(() => {
    if(!text){
      return
    }
    
    getMaquinasCategoria(text).then(
     (x) => {
      console.log("***")
     console.log(x)
     console.log("***")
    setMaquinas(x)
    }

   )

 }, [text])
 
  
  return (
    
    <div className='col-span-6 sm:col-span-5 bg-gray-100   h-full w-auto'>
        <Modal accion={deleteCategoria} mostrar={mostrar}  estado={()=>{setMostrar(false)}}/>
        
          <Modal2 tipo={text} info={temporal} accion={deleteCategoria} mostrar={mostrar2}  estado={()=>{setMostrar2(false)}}/>

        
        
      <div className='space-y-5 w-[100%] sm:w-[90%] lg:w-[70%] mx-auto'>

      <div className='flex flex-row py-10 border shadow-md border-gray-200 rounded-md bg-white mx-5 my-10'>
        <h1 className='basis-3/4 pl-10 text-2xl cursor-pointer'>Bienvenido al Administrador de la categoría {text}</h1>
       
        <TrashIcon onClick={()=>{setMostrar(true);setSection1(false); setSection2(false)}} className=' cursor-pointer w-7 h-7 text-red-500' />
      </div>
      {/* Ver Maquinas */}
      <div className='py-2 border shadow-md border-gray-200 rounded-md bg-white mx-5 my-10 justify-center'>
        <div className='flex flex-row m-3 '>
          <div className=' basis-3/4'>
          <h1 className='pl-10 text-2xl'>Elimnar Maquinas</h1>
        
          </div>
          <div className='basis-1-4 cursor-pointer'>
            {!section1 &&(<ChevronDownIcon onClick={()=>{setSection1(!section1)}} className='h-10 w-10'/>)}
            {section1 &&(<ChevronUpIcon onClick={()=>{setSection1(!section1)}} className='h-10 w-10'/>)}
          </div>
        </div>
        {section1 && (
          <div>
          <div className=' px-14' >
            {maquinas != null? ( 
            <>
            {/* Render Maquinas */}
            {maquinas.map((maquina)=>(<Lista details={maquina} tipo={text} showModal2={()=>{setMostrar2(true); setSection1(false); setSection2(false)}}  actualizar={actualizarTemporal}/>))}
            </>
            ): (<></>)}
           
          </div>
        </div> 
        )}
          

      </div>

      {/* Añadir Maquina */}
      <div className='py-2 border shadow-md border-gray-200 rounded-md bg-white mx-5 my-10  '>
        <div className='flex flex-row m-3 items-stretch '>
          <div className=' basis-3/4'>
          <h1 className='pl-10 text-2xl'>Añadir Maquina</h1>
        
          </div>
          <div className='basis-1-4 cursor-pointer'>
            {!section2 &&(<ChevronDownIcon onClick={()=>{setSection2(!section2)}} className='h-10 w-10'/>)}
            {section2 &&(<ChevronUpIcon onClick={()=>{setSection2(!section2)}} className='h-10 w-10'/>)}
          </div>
        </div>
        {section2 && (
                <div class="bg-white w-full max-w-md mx-auto border mt-10 ">
                   <>
                   <div>
                  <div className='mx-auto max-w-xs text-center'>
                    Add Maquina 
                  </div>
                  </div>
                   </>
              
                <form  className=" shadow-md rounded px-8 pt-6 pb-8 mb-4">
                  
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
        )}
          

      </div>
      {/*  */}


      </div>
      
      
    </div>
  )
}

export default ContenidoC