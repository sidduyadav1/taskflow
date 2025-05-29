import React from 'react'
import TaskHistory from '../Tasklist/TaskHistory'
import Nav from '../others/navbar'
import Tasks from '../Tasklist/Tasks'

const EmployeeDashboard = (props) => {
  // console.log(props.data)
  return (
    <div className='bg-[#211c1c]'>
      <Nav data={props}/>
      <TaskHistory data={props.data} />
      <Tasks data={props.data} />
    </div>
  )
}

export default EmployeeDashboard
