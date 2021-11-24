import { configureStore,createSlice} from "@reduxjs/toolkit";
import { FB_DB } from "./_firebase";


const slice = createSlice({
    name:'useReducer',
    initialState:{
        user:null,
        sleepData:{}
    },
    reducers:{
        setUser:(state,action)=>{state.user = action.payload},
        setSleep:(state,action)=>{state.sleepData = action.payload},
    }
})

export const ACTION = slice.actions;
export default configureStore({reducer:slice.reducer})