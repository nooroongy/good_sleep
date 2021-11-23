import { configureStore,createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name:'useReducer',
    initialState:{
        user:null,
    },
    reducers:{
        set:(state,action)=>{state.user = action.payload}
    }
})

export const ACTION = slice.actions;
export default configureStore({reducer:slice.reducer})