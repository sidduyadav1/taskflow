import React from 'react'
import TaskHistory from '../Tasklist/TaskHistory'
import Nav from '../others/navbar'
import Tasks from '../Tasklist/Tasks'
import { useState } from 'react'

const EmployeeDashboard = (props) => {


  // let data =props.data;
  const employees=JSON.parse(localStorage.getItem("employees"));
  const [data, setdata] = useState(props.data)
 


const Marktaskcomplete=(param)=>{

  const updatedemployees=employees.map((e)=>{
    if(e.id===props.data.id){
      const updatedtask=e.tasks.map((task)=>{
        if(task.taskDescription===param.taskDescription){
          return{
            ...task,
            active:false,
            newTask:false,
            completed:true,
          }
        }
        return task;
      })
      return{
        ...e,
        tasks:updatedtask,
      }
    }
    return e;
  })
  // console.log(updatedemployees);


  updatedemployees.map((e)=>{
    if(e.id===props.data.id){
      setdata(e);
    }
  })

localStorage.setItem("employees",JSON.stringify(updatedemployees))

// console.log(data)
}


  

  

  return (
    <div className='bg-[#211c1c]'>
      <Nav data={props}/>
      <TaskHistory data={props.data}   />
      <Tasks data={data} Marktaskcomplete={Marktaskcomplete} />
    </div>
  )
}

export default EmployeeDashboard
