import React from 'react'
import { useState } from 'react';

const navbar = (props) => {
  
  const logoutHandler=()=>{
    localStorage.removeItem("loggedinuser");
    props.data.setuser(null);
  }
  

  return (
    <div className='w-full flex justify-between text-amber-50 p-[50px]'>
      <div > <span className='text-xl'>Hello</span>, <br />  <span className=' text-3xl font-semibold '>   { props.data.data ?  props.data.data.firstName : "Admin" }👋</span>  </div>
      <div><button onClick={logoutHandler} className='bg-red-500 p-[10px] px-[20px] rounded-md cursor-pointer'> LogOut </button></div>
    </div>
  )
}

export default navbar
