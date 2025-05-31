import React from 'react'

function Completetask(props) {

  // console.log(props)
  return (
    <div key={props.ind} className='  flex-shrink-0 h-full w-[25%] bg-green-300 rounded-xl relative'>
    <div className='flex justify-between p-6 '>
      <span className=' bg-red-500 px-[15px] py-[5px] rounded-sm'>{props.data.category}</span>
      <span>{props.data.taskDate}</span>
    </div>    
    <h1 className='m-3 text-3xl font-semibold tracking-tight'> {props.data.taskTitle}</h1>
    <p className='m-3'>{props.data.taskDescription}</p>
    <div className='m-2 absolute bottom-7 left-4'>
        <button className='bg-emerald-100 p-1.5 rounded-md'>Delete task</button>
    </div>
  </div>
  )
}

export default Completetask
