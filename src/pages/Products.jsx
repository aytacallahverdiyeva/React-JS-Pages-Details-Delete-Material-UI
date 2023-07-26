import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const Products = () => {
  const navigate = useNavigate();
  const [data, setData]=useState([]);
  useEffect(()=>{ /* useEffect ilk ise dusur ona gore ilk onu yazaciq*/
axios("http://localhost:3009/get-data").then((res)=>{
  setData(res.data.data);
})
  }, [])
  return <div>
<table id="customers">
  <thead>
  <tr>
    <th>ID</th>
    <th>Image</th>
    <th>Title</th>
    <th>Description</th>
    <th>Category</th>
    <th>Price</th>
    <th>Details</th>
    <th>Delete</th>
  </tr>
  </thead>
  <tbody>
  {
    data.map((item)=> { /*map here because we need only tbody info in map not thead*/
      if(typeof item.title !=="undefined"){ /*statement if/else for undefined in the end of datas(that's our login info which saves there) */
        return(
/*important to have key for every product*/<tr key={item.id}>  
    <td>{item.id}</td>
    <td> <img src={item.image} alt={item.title} /></td>
    <td>{item.title.slice(0,16)}</td>
    <td>{item.description.slice(0,20)}</td>
    <td>{item.category}</td>
    <td>{item.price}</td>
    <td>
      <button onClick={()=>navigate(`/product-detail/${item.id}`)}>Details</button>
      </td>
      <td>
        <button>Delete</button>
      </td>
  </tr>
        );}}
)}
  </tbody>
</table>
    </div>
}

export default Products