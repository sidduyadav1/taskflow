import React from 'react'
import { useState } from 'react'
import { setLocalstorage } from '../utils/Localstorage';

const Submit = ({getPass}) => {

    const [Email, setEmail] = useState("");
    const [Pass, setPass] = useState("");

    setLocalstorage();

    const handler=(e)=>{
        e.preventDefault();
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

    <div className=' w-full h-screen relative '>
      <div className=''>
        <span className='text-6xl font-bold tracking-widest italic absolute top-[44%] left-[25%] text-zinc-500' >taskFlow</span>
      </div>

      <div className='h-[350px] bg-zinc-600 w-[2px] absolute top-[30%] left-[52%] '>

      </div>


        <form onSubmit={(e)=>{handler(e)}} className=' border-none flex flex-col items-center gap-7 absolute left-1/2 top-1/2  -translate-y-1/2 border p-[150px] rounded-3xl border-emerald-200'>       
            <input required type="email" value={Email} onChange={(e)=> EmailHandler(e)} placeholder='Enter you Email : ' className=' w-[25vw] border text-zinc-300 border-emerald-300 px-7 py-3 rounded-md'/>
            <input required type="password" value={Pass} onChange={(e)=>PassHandler(e)} placeholder='Enter your Password :' className=' w-[25vw] border text-zinc-300 border-emerald-300 px-7 py-3 rounded-md'/>
            <button className='bg-emerald-200 w-[25vw] py-2 rounded-md text-black p-2 cursor-pointer ' >Login</button>

        </form>
    </div>

    </>


  )
}

export default Submit
