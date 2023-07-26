import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = ({setUser}) => {
	const navigate = useNavigate();
	const [loginData,setLoginData] = useState({
		username: "",
		password: "",
	})
	const login = () => {
		axios.post(`http://localhost:3009/login`, loginData).then((res) =>{
			if (res.status){
				navigate("/dashboard");
				setUser(true);
				sessionStorage.setItem("token", res.data.data.token);
			}
		});
	};
	const onHandleChange = (e) => {
		setLoginData({...loginData, [e.target.name]:e.target.value});
	}
  return (
	 <div>
		<input type="text" name='username' onChange={onHandleChange}/>
		<input type="password" name='password' onChange={onHandleChange}/>
<button onClick={login}>Login</button>
	 </div>
  )
}

export default Login