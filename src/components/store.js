import { configureStore, createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'useReducer',
    initialState: {
        user: {},
        sleepData: [],
        colorSet: {
            mainColor: '01',
            subColor: '01',
            theme: '01',
            fontColor: '01',
        }
    },
    reducers: {
        setUser: (state, action) => { state.user = action.payload },
        setSleep: (state, action) => { 
            let soltTmp = [...action.payload]
            soltTmp.sort((a,b)=>b.date -a.date)

            state.sleepData = soltTmp
        },
        setColorSet: (state, action) => { state.colorSet = action.payload },
        removeSleep: (state, action) => {
            state.sleepData = state.sleepData.filter(data => data.id !== action.payload)
        },
        addSleep:(state, action)=>{
            state.sleepData = [action.payload,...state.sleepData];
        }
    }
})

export const ACTION = slice.actions;
export default configureStore({ reducer: slice.reducer })