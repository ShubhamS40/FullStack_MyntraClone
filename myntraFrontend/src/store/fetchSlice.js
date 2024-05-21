import {createSlice} from '@reduxjs/toolkit'

const fetchSlice=createSlice({
    name:'fetchStatus',
    initialState:{
        fetchDone:false,
        currentlyFetching:false
    },
    reducers:{
        markFetchDone:(state,action)=>{
            state.fetchDone=true;
        },
        markFetchingStarted:(state,action)=>{
            state.currentlyFetching=true;
        },
        markFetchingFinished:(state,action)=>{
            state.currentlyFetching=false;
        }
    }
})

export const fetchStatusAction=fetchSlice.actions;

export default fetchSlice