import React from 'react'
import Completetask from './Completetask';
import  { useState } from 'react';

function Accepttask(props) {

  const [iscompleted, setiscompleted] = useState(false)

  // console.log(props)
  const taskCompleted=(e)=>{
    props.Marktaskcomplete(e);
    
  }

  return (
    <div key={props.ind} className='flex-shrink-0 h-full w-[25%] bg-blue-300 rounded-xl relative'>
    <div className='flex justify-between p-6 '>
      <span className=' bg-red-500 px-[15px] py-[5px] rounded-sm '>{props.data.category}</span>
      <span>{props.data.taskDate}</span>
    </div>    
    <h1 className='m-3 text-3xl font-semibold tracking-tight'> {props.data.taskTitle}</h1>
        <p className='m-3'>{props.data.taskDescription}</p>
    <div className='flex justify-around m-4 absolute bottom-5 gap-5 '>
        <button  onClick={()=>taskCompleted(props.data)} className='bg-emerald-400 p-1.5 rounded-md cursor-pointer ' >Mark as completed</button>
        <button className='bg-red-400 p-1.5 rounded-md cursor-pointer'>Mark as failed</button>
    </div>
    { iscompleted && <Completetask data={props.data} /> }
  </div>
  )
}

export default Accepttask




// import React, { useState } from 'react';
// import Completetask from './Completetask';

// function Accepttask(props) {
//   const [iscompleted, setiscompleted] = useState(false);

//   const taskCompleted = () => {
//     props.data.completed = true;
//     props.data.active = false;
//     setiscompleted(true);
//   };

//   const deleteTask = () => {
//     // Optionally pass index to parent to handle deletion
//     console.log("Delete task logic here");
//   };

//   return (
//     <div
//       key={props.ind}
//       className={`flex-shrink-0 h-full w-[25%] rounded-xl relative transition-colors duration-300 ${
//         iscompleted ? 'bg-green-400' : 'bg-blue-300'}`}
//     >
//       <div className='flex justify-between p-6'>
//         <span className='bg-red-500 px-[15px] py-[5px] rounded-sm'>
//           {props.data.category}
//         </span>
//         <span>{props.data.taskDate}</span>
//       </div>
//       <h1 className='m-3 text-3xl font-semibold tracking-tight'>
//         {props.data.taskTitle}
//       </h1>
//       <p className='m-3'>{props.data.taskDescription}</p>

//       <div className='flex justify-around m-4 absolute bottom-5 gap-5'>
//         {!iscompleted ? (
//           <>
//             <button
//               onClick={taskCompleted}
//               className='bg-emerald-400 p-1.5 rounded-md cursor-pointer'
//             >
//               Mark as completed
//             </button>
//             <button className='bg-red-400 p-1.5 rounded-md cursor-pointer'>
//               Mark as failed
//             </button>
//           </>
//         ) : (
//           <button
//             onClick={deleteTask}
//             className='bg-black text-white p-1.5 rounded-md cursor-pointer'
//           >
//             Delete Task
//           </button>
//         )}
//       </div>

//       {/* {iscompleted && <Completetask  />} */}
//     </div>
//   );
// }

// export default Accepttask;

