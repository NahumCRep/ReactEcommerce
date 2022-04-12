import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: "cart",
    initialState:[],
    reducers:{
        addCart(state, action){
            let newState = []
            if(state.length !== 0){
                state.forEach((item)=>{
                    if(item.id == action.payload.id){
                        item.quantity = item.quantity + 1
                        newState = state
                    }else{
                        newState = [...state, action.payload]
                    }
                })
            }else{
                newState = [...state, action.payload]
            }
            return newState
        },
        removeCart(state,action){
            let newArray = state.filter((item) => item.id !== action.payload)
            return newArray
        },
        incrementQuantity(state,action){
            state.forEach((item)=>{
                if(item.id == action.payload){
                    item.quantity = item.quantity + 1
                }
            })
            return state
        },
        decrementQuantity(state,action){
            state.forEach((item)=>{
                if(item.id == action.payload){
                    item.quantity > 1 && (item.quantity = item.quantity - 1)
                }
            })
            return state
        }
    }
})

export const {addCart, removeCart, incrementQuantity, decrementQuantity} = cartSlice.actions // Esto se utiliza en el dispatch
export default cartSlice.reducer
