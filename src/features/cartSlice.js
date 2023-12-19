import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice(({
    name:"cart",
    initialState:{
        cart:[],
        total:0
    },
    reducers:{
        add(state,action){
            state.cart.push(action.payload);
            state.total += parseFloat(action.payload.price)
        },
        remove(state,action){
            const {id,total} = action.payload;
            // state = state.filter((item)=> item.id !== action.payload)
            state.cart = state.cart.filter((item)=> item.id !== id);
            state.total -= parseFloat(total)
        },
    }
}))


export const {add,remove} = cartSlice.actions;

export default cartSlice.reducer