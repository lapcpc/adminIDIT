import Head from 'next/head'
import Image from 'next/image'
import { Router } from 'next/router'
import Sidebar from '../components/Sidebar'
import Contenido from '../components/Contenido'
import Modal from '../components/Modal'
export default function Home() {
  //Pagin principal
  return (
    <div className='   h-screen flex-col grid grid-cols-7'>
    {/* Menu Lateral  */}
    
    <Sidebar />
   
    <Contenido />
    
    
      
    {/* Contenido */}
 </div>
  )
}
