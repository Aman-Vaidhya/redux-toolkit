import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from '../features/productSlice';
import { add, remove } from '../features/cartSlice';

const Products = () => {
    const state = useSelector((state) => state);
    const { loading, product, error } = state.products
    const { cart } = state.cart
    const dispatch = useDispatch();
    console.log(product)
    useEffect(() => {
        dispatch(fetchProducts());
    }, []);
    if (loading == true) {
        return <div>Loading....</div>
    }
    else if (error) {
        return <div>Erorr...</div>
    }
    return (
        <>
            {(product !== 0 ?
                <div style={{ "display": "flex", "flexDirection": "column" }}>
                    {product.map((prod) => {
                        return (
                            <div key={prod.id} style={{ "marginTop": "10px" }}>
                                <img src={prod.image} alt="" style={{ "height": "300px", "width": "300px", "objectFit": "cover" }} />
                                <h1>{prod.title}</h1>
                                {cart.some(p => p.id === prod.id) ? (
                                    <button onClick={() => dispatch(remove(prod.id))}>Remove</button>
                                ) :
                                    <button onClick={() => dispatch(add(prod))}>Add</button>
                                }

                            </div>
                        )
                    })}
                </div>
                :
                <div>sdsaddsa</div>)}
        </>
    )
}

export default Products