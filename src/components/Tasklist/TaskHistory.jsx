import React from 'react'

const TaskHistory = ({data}) => {
    // const data = JSON.parse(localStorage.getItem("employees")) ;
    console.log(data)

  return (
       <div className='w-full  flex flex-row justify-center items-center'>
        <div className='w-[325px] h-[18vh] p-[50px] bg-blue-300  text-amber-50 font-semibold rounded-xl  mx-[10px]'>
            <div className='text-4xl '>{data.taskCounts.active}</div>
            <div className='text-2xl p-[1px] '> Active Tasks</div>
        </div>
        <div className='w-[325px] h-[18vh] p-[50px]  bg-green-300  text-amber-50 font-semibold rounded-xl mx-[10px]'>
            <div className='text-4xl '>{data.taskCounts.newTask}</div>
            <div className='text-2xl p-[1px] '> New Tasks</div>
        </div>
        <div className='w-[325px] h-[18vh] p-[50px]  bg-yellow-300  text-zinc-950 font-semibold rounded-xl mx-[10px]'>
            <div className='text-4xl '>{data.taskCounts.completed}</div>
            <div className='text-2xl p-[1px] '> Completed Tasks</div>
        </div>
        <div className='w-[325px] h-[18vh] p-[50px]  bg-red-400  text-amber-50 font-semibold rounded-xl mx-[10px]'>
            <div className='text-4xl '>{data.taskCounts.failed}</div>
            <div className='text-2xl p-[1px] '> Failed Tasks</div>
        </div>
    </div>
  )
}

export default TaskHistory
