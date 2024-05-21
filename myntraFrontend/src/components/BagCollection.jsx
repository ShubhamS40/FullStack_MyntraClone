import React from 'react'
import { useSelector } from 'react-redux';

function BagCollection() {
  const items=useSelector((store)=>store.items)
  const bagItem=useSelector((store)=>store.bag)
  const finalItems=items.filter((item)=>{
    return bagItem.indexOf(item.id)>=0
     
  })
const CONVENIENCE_FEES=99
let totalItem = bagItem.length;
let totalMRP = 0;
let totalDiscount = 0;
const original_price=  finalItems.map((item)=>{
  totalMRP+=item.original_price;
  totalDiscount+=item.original_price-item.current_price
})
let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;

   
  return (
    <div className="bag-summary">
    <div className="bag-details-container">
      <div className="price-header">PRICE DETAILS ({totalItem} Items)  </div>
      <div className="price-item">
        <span className="price-item-tag">Total MRP </span>
        <span className="price-item-value">₹ {totalMRP}</span>
      </div>
      <div className="price-item">
        <span className="price-item-tag">Discount on MRP</span>
        <span className="price-item-value priceDetail-base-discount">
          -₹ {totalDiscount}
        </span>
      </div>
      <div className="price-item">
        <span className="price-item-tag">Convenience Fee</span>
        <span className="price-item-value">₹99</span>
      </div>
      <hr />
      <div className="price-footer">
        <span className="price-item-tag">{finalPayment}</span>
        <span className="price-item-value">₹</span>
      </div>
    </div>
    <button className="btn-place-order">
      <div className="css-xjhrni">PLACE ORDER</div>
    </button>
  </div>
  )
}

export default BagCollection
