
import { createSlice } from "@reduxjs/toolkit";


export const likesSlice = createSlice({
    name:'likes',
    initialState:{likes:[]},
    reducers:
    
    {
        setLikes:(state,action)=>{
            state.likes.push(action.payload)
            
    },
    deleteLikes:(state,action)=>{
        state.likes.filter(el=>el.id!==action.payload.id)
    }

}})

export const {setLikes,deleteLikes} = likesSlice.actions;
export default likesSlice.reducer;