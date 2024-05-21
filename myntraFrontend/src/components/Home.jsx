import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { bagAction } from '../store/bagSlice';
// import {useSelector} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';




function Home({item}) {



  const dispatch=useDispatch()
const bagItem=useSelector((store)=>store.bag)
const elementfound=bagItem.indexOf(item.id)>=0;
const handleAdd=()=>{
  dispatch(bagAction.addToBag(item.id))
  
}

const handleRemove=()=>{
dispatch(bagAction.removeFromBag(item.id))
  
}

  return (
    <div className="item-container">
    <img className="item-image" src={item.image} alt="item image" />
    <div className="rating">
      {item.rating.stars} ⭐ | {item.rating.count}
    </div>
    <div className="company-name">{item.company}</div>
    <div className="item-name">{item.item_name}</div>
    <div className="price">
      <span className="current-price">Rs {item.current_price}</span>
      <span className="original-price">Rs {item.original_price}</span>
      <span className="discount">({item.discount_percentage}% OFF)</span>
    </div>
    
    {
    elementfound?  <button onClick={handleRemove} type="button" class="btn btn-danger">Remove</button>:<button onClick={handleAdd} type="button" class="btn btn-success">Add</button>
    
    }

    
  

  
  </div>
  
);
};
    


export default Home
