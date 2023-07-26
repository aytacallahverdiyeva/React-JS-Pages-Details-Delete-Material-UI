import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom' /*method of the react router dom*/
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
	const {id}  = useParams(); /*id in {} because it districts and in console we have id not object*/
	const [card,setCard]=useState({});
	useEffect(()=>{
axios(`http://localhost:3009/get-data/${id}`).then((res)=>{
	setCard(res.data.data)
})
	},[])
  return (
	 <div className='card-content'>
    	<ProductCard card={card}/>  		{/* burda props olaraq card add edirik */}

	 </div>
  )
}

export default ProductDetail