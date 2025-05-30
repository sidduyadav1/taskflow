import React, { useContext, useEffect,useState } from 'react'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import Submit from './components/Auth/Submit'
import { setLocalstorage, getLocalstorage } from './components/utils/Localstorage';
import Authprovider from './components/Context/Authprovider';
import { Authcontex } from './components/Context/Authprovider';




const App = () => {

  const [User, setUser] = useState(null)
  const [Userdata, setUserdata] = useState(null)
  const Authdata =useContext(Authcontex)




  useEffect(() => {
    const temp=JSON.parse(localStorage.getItem("loggedinuser"))
    if(temp){
      setUser(temp.role);
      setUserdata(temp.data)


    }
  }, [])
  

  function getPass(email,pass){

    if(email==="admin@example.com" && pass==="123"){
      setUser("admin");
      localStorage.setItem("loggedinuser",JSON.stringify({role:"admin"}))
    }
    else if (Authdata ){

      const data=JSON.parse(localStorage.getItem('employees'));
       
      // console.log(data)

      const employee=data.find((e)=> e.email===email && e.password===pass);
      // console.log(employee)
     
      localStorage.setItem("loggedinuser",JSON.stringify({role:"user", data:employee }));  
      
      setUserdata(employee);
      setUser("user");


    }
    else{
      alert("Invalid credentials");
    }
  }

//  console.log(Userdata)

  return (
    <div>

      {!User ? <Submit getPass={getPass}/> : ""}
      {User==="user" && <EmployeeDashboard data={Userdata} setuser={setUser}/>}
      {User=="admin" &&<AdminDashboard  setuser={setUser} />}
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/> */}
    </div>
  )
}

export default App
