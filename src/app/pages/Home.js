import React, { useState } from 'react'
import { v4 } from 'uuid';

const Home = (props) => {
    const [items, setItems] = useState([{name:"Item1",id:1,completed:true}]);
    const [itemName, setItemName] = useState('');

    const saveItem = () => {
        const newItem = {
            id: v4(),
            name: itemName,
            completed: false
        }
        setItems([...items, newItem]);
    }

    const changeStatus=(id)=>{
        const updatedItems = items.map(item=>{
            if(item.id === id){
                return {...item,completed:!item.completed}
            }
            return item;
        });
        setItems(updatedItems);
    }
    return (
        <div className="w-full flex justify-center mt-3">
            <div >
                <div>
                    <input className='border p-2' onChange={(e) => setItemName(e.target.value)} />
                    <button className="block p-3 bg-blue-500 text-white mt-1" onClick={saveItem}>Save Item</button>
                </div>
                <div className='mt-4'>
                    <p>All Items</p>
                    <div>
                        {items.map((item) => {
                            return (
                                <div key={item.id} className='w-full bg-gray-100 p-3 mt-1 flex justify-between'>
                                    <p className={`${item.completed? 'line-through	':''}`}>{item.name}</p>
                                    <input type="checkbox" checked={item.completed}  onChange={()=>changeStatus(item.id)} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home