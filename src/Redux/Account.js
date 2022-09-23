

import { createSlice } from "@reduxjs/toolkit";

export const accountSlice = createSlice({
    name:'account',
    initialState:{accountsData:{
    
    }},
    reducers:
    
    {
        setData:(state,action)=>{
            state.accountsData=action.payload
         
    }

}})

export const {setData} = accountSlice.actions;
export default accountSlice.reducer;