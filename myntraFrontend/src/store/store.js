import {configureStore } from '@reduxjs/toolkit'
import Itemslice from "./Itemslice"
import fetchSlice from './fetchSlice'
import bagSlice from './bagSlice'

const myntraStore=configureStore({
    reducer:{
        items:Itemslice.reducer,
        fetchstatus:fetchSlice.reducer,
        bag:bagSlice.reducer
    }
})
fetchStatus:fetchSlice.reducer

export default myntraStore