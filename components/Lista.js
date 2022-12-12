import { TrashIcon } from '@heroicons/react/24/solid'
import { deleteDoc, doc } from 'firebase/firestore'
import { useRouter } from 'next/router'
import React from 'react'
import { db } from '../firebase/firebase'

const Lista = ({details,tipo, showModal2, actualizar}) => {
    const router = useRouter()
    const deleteMaquina = async() =>{
        let isobasa = "maquinas" + tipo
        await deleteDoc(doc(db, isobasa, details.nombre));
        router.replace("/");
    }
    const update = () =>{
      console.log(details)
      actualizar(details)
      showModal2()
    }
    return (
     <div class="pl-3 pb-3 sm:pb-4 hover:bg-gray-200 cursor-pointer" onClick={update}>
         <div class="flex items-center space-x-4">
            <div class="flex-shrink-0">
               <img class="w-8 h-8 rounded-lg" src={details.imgen} alt="Neil image" />
            </div>
            <div class="flex-1 min-w-0">
               <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                  {details.nombre}
               </p>
               <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                  {details.descripcion}
               </p>
            </div>
           
         </div>
      </div>
    )
     }

export default Lista