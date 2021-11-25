import { configureStore,createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
    name:'useReducer',
    initialState:{
        user:{},
        sleepData:[]
    },
    reducers:{
        setUser:(state,action)=>{state.user = action.payload},
        setSleep:(state,action)=>{state.sleepData = action.payload},
    }
})

export const ACTION = slice.actions;
export default configureStore({reducer:slice.reducer})