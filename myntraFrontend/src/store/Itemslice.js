import { createSlice } from '@reduxjs/toolkit'




const Itemslice= createSlice({
    name: 'items',
    initialState:[],
    reducers:{
        addInitialItems:(store,action)=>{
         
            return action.payload

        }
    }
   
  })

 export const itemsAction=Itemslice.actions; 

  export default Itemslice