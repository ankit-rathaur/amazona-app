import React, { useEffect } from 'react';
import Product from '../components/Prouct'
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';
import {useDispatch, useSelector} from 'react-redux'
import { listProduct } from '../actions/productActions';
import product from '../components/Prouct';
export default function HomeScreen() {
  const dispatch = useDispatch();
 const productlist = useSelector((state) => state.productlist)
 const {loading,error,products}= productlist;
  useEffect(() =>{
    dispatch(listProduct())
  },[dispatch]);
  
  return ( 
    <div> 
      {loading?<LoadingBox></LoadingBox>
      :
      error?(<MessageBox variant="danger"> {error} </MessageBox>
      ):(
    <div className=" row center">
      {products.map((product)=> (
        <Product key ={product._id} product={product}> </Product>
    ))}
     </div>
       ) }
    
 </div>
  )
     
}

