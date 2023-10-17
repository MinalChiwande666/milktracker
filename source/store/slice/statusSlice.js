import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   
}

export const statusget = createSlice({
    name:'status',
    initialState,
    reducers:{
        setstatus:(state,action)=>{
            state = action.payload
            
           return state
        }
    }
})