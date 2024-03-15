import React from 'react'
import './Middle.css'
import Stats from '../Stats/Stats'
import BasicTable from '../Table/Table'
const Middle = () => {
  return (
    <div className="Middle">
     <h1>Dashboard</h1>
     <Stats/>
     <BasicTable/>
    </div>

  )
}

export default Middle