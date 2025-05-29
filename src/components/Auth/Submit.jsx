import React from 'react'
import { useState } from 'react'

const Submit = ({getPass}) => {

    const [Email, setEmail] = useState("");
    const [Pass, setPass] = useState("");

    const handler=(e)=>{
        e.preventDefault();
        // console.log(`pass: ${Pass} email ${Email}`);

        getPass(Email,Pass);
        setEmail("");
        setPass("");

    }

    const EmailHandler=(e)=>{
      setEmail(e.target.value);
    }

    const PassHandler=(e)=>{
      setPass(e.target.value);
    }




  return (

    <>

    <div className='flex justify-center items-center w-full h-screen relative'>
        <form onSubmit={(e)=>{handler(e)}} className='flex flex-col gap-5 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border p-[150px] rounded-3xl border-emerald-300'>       
            <input required type="email" value={Email} onChange={(e)=> EmailHandler(e)} placeholder='Enter you Email: ' className=' w-[40vw] border text-zinc-300 border-emerald-300 px-7 py-2 rounded-3xl'/>
            <input required type="password" value={Pass} onChange={(e)=>PassHandler(e)} placeholder='Enter your Password :' className=' w-[40vw] border text-zinc-300 border-emerald-300 px-7 py-2 rounded-3xl'/>
            <button className='bg-emerald-300 w-[10vw] rounded-3xl text-black p-2 cursor-pointer ' >Login</button>

        </form>
    </div>

    </>


  )
}

export default Submit
