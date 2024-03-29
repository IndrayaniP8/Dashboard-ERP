import React, { useState } from 'react'
import Logo from '../../imgs/img5.png'
import './Sidebar.css'

import { SidebarData } from '../../Data/Data'
import {UilSignOutAlt} from "@iconscout/react-unicons"
const Sidebar = () => {
    const [selected, setSelected] = useState(0)
  return (
    <div className="Sidebar">
        {/*Logo */}
        <div className="logo">
            <img src={Logo} alt="Company logo" />
            <span>
                CA<span>R</span>TS
            </span>
        </div>

         {/*menu*/}
         <div className="menu">
            {SidebarData.map((item, index)=>{
                return(
                    <div className={selected===index?'menuItem active': 'menuItem'}
                    key={index}
                    onClick={()=>setSelected(index)}
                    >
                        
                        <item.icon/>
                        <span>
                            {item.heading}
                        </span>
                    </div>
                )
            })}
             <div className="menuItem">
                 <UilSignOutAlt/>
             </div>
         </div>
    </div>
  )
}

export default Sidebar