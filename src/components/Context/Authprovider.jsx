import React from 'react'
import { useState , useEffect } from 'react';
import { useContext } from 'react'
import { getLocalstorage ,setLocalstorage} from '../utils/Localstorage';
import { createContext } from 'react';

export const Authcontex=createContext();


function Authprovider({children}) {


  // setLocalstorage()

  useEffect(() => {
    setLocalstorage();
  }, []);
  
    const [Userdata, setUserdata] = useState(null);

    useEffect(() => {
        const {employees,admin}=getLocalstorage();
        setUserdata({employees,admin});
    }, [])

    // console.log(Userdata.employees);

  return (
    <div>
      <Authcontex.Provider value={Userdata}>
      {children}
      </Authcontex.Provider>
    </div>
  )
}

export default Authprovider
