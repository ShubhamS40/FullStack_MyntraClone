import Home from "../components/Home";
// import { useSelector,useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { itemsAction } from "../store/Itemslice";
import { fetchStatusAction } from "../store/fetchSlice";
import { useDispatch, useSelector } from "react-redux";


const HomeItem = () => {
  const items=useSelector((data)=>data.items)
  const fetchStatus=useSelector((store)=>store.fetchstatus)
let dispatch=useDispatch()


dispatch(fetchStatusAction.markFetchingStarted())
useEffect(()=>{
  if(fetchStatus.fetchDone) return;
  
  fetch("http://localhost:3000/item").then((data)=>data.json()).then((result)=>{
    dispatch(fetchStatusAction.markFetchDone())
    dispatch(fetchStatusAction.markFetchingFinished())
    dispatch(itemsAction.addInitialItems(result))
  })


},[])


   
  return (
    <main>
        {/* <h1>hello </h1> */}
       <div className="items-container">
        
        {items.map((item) => (
          <Home key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};

export default HomeItem;