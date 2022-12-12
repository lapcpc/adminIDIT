import React, { useEffect, useState } from 'react'
import Desplegables from './Desplegables'
import Link from 'next/link'

import { onSnapshot, query,collection,   } from 'firebase/firestore'
import { db } from '../firebase/firebase'

function CuadroDespegable({activo}) {
    const recuadros = [{text:"FABLAB"},
    {text:"METAL"}
]

const [areasIDIT, setAreasIDIT] = useState(null)
//Descarga las diferentes areas IDIT
useEffect(() => {
  const q = query(collection(db, "Areas"));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const cities = [];
    querySnapshot.forEach((doc) => {
     let temporal = doc.data() ;
     //A cada documento se le añade una opcion para navegar a su respectiva pagina principal
     temporal.accion = ()=>{navigation.navigate('Categoria', {categoria: temporal.nombre}) }
      cities.push(temporal);
    });

     console.log(cities) 
     //Se almacena en la variable areas IDIT
     setAreasIDIT(cities)     
  });
  
}, []);
if (!activo){
  return (<></>)
}

  return (
    
    <div className=' relative  top-[-10px] border-gray-200  lg:left-10 max-w-[150px] z-50'>
       {areasIDIT != null ? (
        <>
        {/*Renderiza sobre el arreglo de areasDIT */}
        {areasIDIT.map((item)=>{
          return <Desplegables  text={item.nombre}/>
     })}
        </>
       ):(<></>)}
      {/* Se añade un enlace a la pagina donde se pueden añadir mas categorias */}
    <Link href='/add' className='block ml-3 m-2 my-1 py-1 bg-gray-200 hover:bg-white hover:border hover:border-gray-300 cursor-pointer rounded-sm pl-2' >
        Add
     </Link>
    
    
    </div>
  )
}

export default CuadroDespegable