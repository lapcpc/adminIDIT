import React from 'react'

import SidebarRow from './SidebarRow'
import { ChevronDownIcon,ChevronUpIcon  } from '@heroicons/react/24/solid'

function Desplegable({accion, activo}) {
    
  return (
    <div>
    <div className='flex justify-center mt-8' onClick={accion}>
    {!activo && <SidebarRow Icon={ChevronDownIcon} text="Categorias" />  }
    {activo && <SidebarRow Icon={ChevronUpIcon} text="Categorias" />  }
    
    
    </div>

    
   
</div>
  )
}

export default Desplegable