import React from 'react'
import Accepttask from './Accepttask'
import Newtask from './Newtask'
import Completetask from './Completetask'
import Failedtask from './Failedtask'

const Tasks = ({data , Marktaskcomplete }) => {

  // const data= JSON.parse( localStorage.getItem(''));
//  console.log(data);

   



  return (
    <div id='tasklist' key={data.id} className=' relative overflow-x-auto  text-zinc-100 h-[40vh] w-[95%] mt-[70px] ml-[30px] space-x-[20px] flex flex-nowrap'>


    {data.tasks.map((e,index)=>{
     if(e.active){
        
         return <Accepttask data={e} key={index} Marktaskcomplete={Marktaskcomplete}/>
      }
    if(e.newTask){
      return <Newtask data={e} key={index}/>
    }
    if(e.completed){
      return <Completetask data={e} key={index}/>
    }
    if(e.failed){
      return <Failedtask data={e} key={index}/>
    }
    }) }

    </div>
  )
}

export default Tasks
