import React from 'react'

function Newtask(props) {
  return (
    <div className='flex-shrink-0 h-full w-[25%] bg-yellow-300 rounded-xl '>
    <div className='flex justify-between p-6 '>
      <span className=' bg-red-500 px-[15px] py-[5px] rounded-sm'>{props.data.category}</span>
      <span>{props.data.taskDate}</span>
    </div>    
    <h1 className='m-3 text-3xl font-semibold tracking-tight'> {props.data.taskTitle}</h1>
    <p className='m-3'>{props.data.taskDescription}</p>
    <div className='m-2 bg-emerald-400'>
        <button>Accept task</button>
    </div>
  </div>
  )
}

export default Newtask
