import Axios from "axios"
import {CART_ADD_ITEM} from "../constants/cartConstants"
 
export const addTOCart=(productId,qty)=>async(dispatch,getState)=>{
    const{data}=await Axios.get(`http://localhost:5000/api/products/${productId}`)
    dispatch({
        type:CART_ADD_ITEM,
        payload:{
            name:data.name,
            image:data.image,
            price:data.price,
            countInStock:data.countInstaock,
            product:data._id,
            qty,

        }
    })
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
}