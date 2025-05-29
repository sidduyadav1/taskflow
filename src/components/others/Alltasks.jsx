import React from 'react'
import { useContext } from 'react';
import { Authcontex } from '../Context/Authprovider';

function  Alltasks(props) {


    const data=useContext(Authcontex);
    // console.log(data.employees.taskCounts);

  return (



    <div className='w-full  mt-2 pt-2 bg-zinc-800 text-zinc-100 '>  
        <div className=' bg-red-500 rounded-xl p-4  mx-6 my-4 flex justify-between'>
            <h3 className='w-1/7'>Employee Name</h3>
            <h3 className='w-1/7'>New Task</h3>
            <h3  className='w-1/7'>Active Task</h3>
            <h3  className='w-1/7'>Completed Task</h3>
            <h3 className='w-1/7'>Failed Task</h3>
        </div>

            {
                data.employees.map((e ,index)=>{

                   return <div key={index} className=' border-emerald-400 border rounded-xl p-4 mx-6 my-4 flex justify-between'>
                     <h3 className='w-1/7' >{e.firstName}</h3>
                     <h3 className='w-1/7'>{e.taskCounts.newTask}</h3>
                     <h3 className='w-1/7'>{e.taskCounts.active}</h3>
                     <h3 className='w-1/7'>{e.taskCounts.completed}</h3>
                     <h3 className='w-1/7'>{e.taskCounts.failed}</h3>
                     </div>
                })
            } 
       </div>
  )
}

export default Alltasks
