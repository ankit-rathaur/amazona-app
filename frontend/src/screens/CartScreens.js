import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { useParams,useLocation } from 'react-router';
import { addTOCart } from '../actions/cartactions';
export default function CartScreens(props) {
    const { id: productId } = useParams();
    const searchQuery = new URLSearchParams(useLocation().search);
    const qty = searchQuery.get('qty');
    const dispatch = useDispatch()
    useEffect(() => {
        if(productId){
            dispatch(addTOCart(productId,qty))
        }
        
    }, [ dispatch,productId,qty])
    return (
        <div>
            <h1>cart screeen</h1>
            <p>
                ADD TO CART :ProductId:{productId}  Qty {qty}
            </p>
        </div>
    )
}
 