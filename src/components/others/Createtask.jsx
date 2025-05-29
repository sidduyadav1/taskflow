// import React from 'react'
// import { useState,useEffect } from 'react'

// const Createtask = (props) => {



//   const [Title, setTitle] = useState("")
//   const [Date, setDate] = useState("")
//   const [Assign, setAssign] = useState("")
//   const [Category, setCategory] = useState("")
//   const [Description, setDescription] = useState("")
//   const [Task, setTask] = useState({})


//   const data=JSON.parse( localStorage.getItem("employees"));

//   const taskhandler=(e)=>{

//     e.preventDefault()

//     setTask({
//                 active: true,
//                 newTask: true,
//                 completed: false,
//                 failed: false,
//                 Title,
//                 Description,
//                 Date,
//                 Category 
//     });



//   data.forEach(element => {

//     if(element.firstName===Assign){
//       element.tasks.push(Task)
//     }
//     console.log(element)
//   });
    
//     setTitle("")
//     setDate("")
//     setAssign("")
//     setCategory("")
//     setDescription("")
//   }
    

//   return (
//     <div className= ' bg-zinc-800 text-zinc-100 p-6 -mt-6 mb-7' >
//       <form onSubmit={ (e)=> taskhandler(e)} className='flex justify-between '>
//         <div className='flex flex-col gap-3'>
//             <h3>Title Title</h3>
//             <input onChange={(e)=>{setTitle(e.target.value) } } value={Title} className='border w-[35vw] p-1 rounded-md' type="text" placeholder='Make a UI design' />
//             <h3>Date</h3>
//             <input onChange={(e)=>{setDate(e.target.value) } }  value={Date} className='border w-[35vw] p-1 rounded-md' type="date" placeholder='' />
//             <h3>Assign to</h3>
//             <input onChange={(e)=>{setAssign(e.target.value) } }  value={Assign} className='border w-[35vw] p-1 rounded-md' type="text" placeholder='employee name'/>
//             <h3>Category</h3>
//             <input onChange={(e)=>{setCategory(e.target.value) } }  value={Category} className='border w-[35vw] p-1 rounded-md' type="text" placeholder='design,dev,etc'/>
//         </div>

//         <div className='grid gap-y-4'>
//             <h3 className=''>Description</h3>
//             <textarea onChange={(e)=>{setDescription(e.target.value) } } value={Description}  rows="10" cols="60" className=' p-4 border rounded-md' name="" id=""></textarea>
//             <div><button className='w-full  p-2 mt-1 rounded-md bg-emerald-400'>Create Title</button></div>
//         </div>
//       </form>
//     </div>
//   )
// }



// export default Createtask





import React, { useState } from 'react';

const Createtask = () => {
  const [Title, setTitle] = useState("");
  const [Date, setDate] = useState("");
  const [Assign, setAssign] = useState("");
  const [Category, setCategory] = useState("");
  const [Description, setDescription] = useState("");

  const taskhandler = (e) => {
    e.preventDefault();

    const newTask = {
      active: true,
      newTask: true,
      completed: false,
      failed: false,
      taskTitle: Title,
      taskDescription: Description,
      taskDate: Date,
      category: Category,
    };

    const employees = JSON.parse(localStorage.getItem("employees")) ;

    const updatedEmployees = employees.map((employee) => {
      if (employee.firstName === Assign) {
        return {
          ...employee,
          tasks: [...employee.tasks, newTask],
        };
      }
      return employee;
    });

    localStorage.setItem("employees", JSON.stringify(updatedEmployees));

    // Reset form fields
    setTitle("");
    setDate("");
    setAssign("");
    setCategory("");
    setDescription("");

    alert("Task created and assigned successfully!");
    // console.log("Updated Employees: ", updatedEmployees);

  };

  return (
    <div className='bg-zinc-800 text-zinc-100 p-6 -mt-6 mb-7'>
      <form onSubmit={taskhandler} className='flex justify-between'>
        <div className='flex flex-col gap-3'>
          <h3>Task Title</h3>
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={Title}
            className='border w-[35vw] p-1 rounded-md'
            type='text'
            placeholder='Make a UI design'
          />
          <h3>Date</h3>
          <input
            onChange={(e) => setDate(e.target.value)}
            value={Date}
            className='border w-[35vw] p-1 rounded-md'
            type='date'
          />
          <h3>Assign to</h3>
          <input
            onChange={(e) => setAssign(e.target.value)}
            value={Assign}
            className='border w-[35vw] p-1 rounded-md'
            type='text'
            placeholder='Employee first name'
          />
          <h3>Category</h3>
          <input
            onChange={(e) => setCategory(e.target.value)}
            value={Category}
            className='border w-[35vw] p-1 rounded-md'
            type='text'
            placeholder='design, dev, etc'
          />
        </div>

        <div className='grid gap-y-4'>
          <h3>Description</h3>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            value={Description}
            rows='10'
            cols='60'
            className='p-4 border rounded-md'
          ></textarea>
          <div>
            <button className='w-full p-2 mt-1 rounded-md bg-emerald-400'>
              Create Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Createtask;
