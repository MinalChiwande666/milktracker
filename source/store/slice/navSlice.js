import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin: null,
    destination: null,
    travelTimeFormation:null
}

export const navSlice = createSlice({
    name:'nav',
    initialState,
    reducer:{
        setOrigin:(state,action)=>{
            state.origin = action.payload
        },
        setDestination:(state,action)=>{
            state.destination = action.payload
        },
        setTimetravel:(state,action)=>{
            state.travelTimeFormation = action.payload
        }
    }
})

export const {setOrigin,setDestination,setTimetravel} = navSlice.actions;

// useselectors
export const selectOrigin = (state) => state.nav.originl;
export const selectDestination = (state) => state.nav.destination;
export const selecttimetravel = (state) => state.nav.travelTimeFormation;

export default navSlice.reducer;