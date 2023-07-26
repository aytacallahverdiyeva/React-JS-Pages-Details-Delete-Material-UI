import React from 'react'
import { useNavigate } from 'react-router-dom';
import Products from './Products';
// import MenuBar from '../components/MenuBar';


const Dashboard = ({setUser}) => {
  const navigate = useNavigate();
  return (
	 <div>
    {/* <button onClick={()=>{
      sessionStorage.removeItem("token")
      navigate("/");
setUser(false);
    }
      }>Logout</button> */}
      {/* <MenuBar/> */}
      <Products/>
   </div>
  )
}

export default Dashboard