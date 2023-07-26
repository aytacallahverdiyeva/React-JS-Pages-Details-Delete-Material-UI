import { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from  "./pages/Login";
import ProductDetail from "./pages/ProductDetail";
import Dashboard from "./pages/Dashboard";
import jwt_decode from "jwt-decode";
function App() {
	const [user,setUser]=useState (null);

	// console.log("tttttoken", decoded)

	useEffect(()=>{
		const token = sessionStorage.getItem("token");
		if(token){
			let decoded = jwt_decode(token);
			setUser(decoded.sub);
		}

	}, [user])
	

	//*this function is invalid for this project
		// const checkToken = (tokenPassLogin) => {
		// 	const token = sessionStorage.getItem("token");
		// 	if (tokenPassLogin == token){
		// 		setUser(token)
		// 	}
		// }
	return <div className="App">
	<Routes>
	<Route path="/" element={ user ? 
		(<Navigate to="/dashboard"/>) : 
		(<Login setUser={setUser}  />)} />  
	<Route 
	path="/dashboard" 
	element={user ? <Dashboard  setUser={setUser}/> : <Navigate to="/"/>  } />//!!!!!!!
	<Route path="/product-detail/:id"
	element={user ? <ProductDetail  setUser={setUser}/> : <Navigate to="/"/>  }/>
 </Routes>
	</div>
}

export default App;
