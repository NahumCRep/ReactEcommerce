import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: "cart",
    initialState:[],
    reducers:{
        addCart(state, action){
            return [...state, action.payload]
        }
    }
})

export const {addCart} = cartSlice.actions // Esto se utiliza en el dispatch
export default cartSlice.reducer
