import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("getProducts", async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = res.json();
    return data
});

const productsSlice = createSlice({
    name: "products",
    initialState: {
        loading: false,
        product: [],
        error: null,
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.pending,(state)=>{
            state.loading = true;
        })
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.loading = false;
            state.product = action.payload
        })
        builder.addCase(fetchProducts.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export default productsSlice.reducer