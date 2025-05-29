import React from 'react'
import Nav from '../others/navbar'
import Createtask from '../others/Createtask'
import Alltasks from '../others/Alltasks'


const AdminDashboard = (props) => {
  return (
    <div className='w-full h-screen px-5'>
      <Nav data={props}/>
      <Createtask data={props}/>
      <Alltasks data={props}/>
    </div>
  )
}

export default AdminDashboard
