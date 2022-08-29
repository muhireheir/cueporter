import React, { useEffect, useState } from 'react'
import Items from '../components/items/Items'


const Completed = (props) => {
  const [items, setItems] = useState([]);

  useEffect(()=>{
    const completedItems = props.items.filter(item=>item.completed===true);
    setItems(completedItems);
  },[props.items]);
  return (
    <div className='w-full flex justify-center mt-3'>
       <Items items={items} changeStatus={props.changeStatus} />
    </div>
  )
}

export default Completed;