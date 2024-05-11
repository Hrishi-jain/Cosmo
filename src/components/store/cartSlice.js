import {createSlice} from '@reduxjs/toolkit'

const initialState=[];
const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        add(state,action){
            const newItem={
                ...action.payload,
                quantity:1 
            }
            state.push(newItem)
        }

    }


})
export const{add}=cartSlice.actions

export default cartSlice.reducer;