import React from 'react'
import BagItem from '../components/BagItem'
import BagCollection from '../components/BagCollection'
import { useDispatch, useSelector } from 'react-redux'

function Bag() {
const items=useSelector((store)=>store.items)  
const bagItem=  useSelector((store)=>store.bag)



const finalItems=items.filter((item)=>{
  return bagItem.indexOf(item.id)>=0
   
})
console.log(finalItems);

  return (
    
    <main>
      <div className="bag-page">
        <div className="bag-items-container flex">
        {finalItems.map((item) => (
            <BagItem item={item} />
          ))}
        
      </div>
        <BagCollection />
      </div>
    </main>
  )
}

export default Bag
