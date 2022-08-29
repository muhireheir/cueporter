import React, { useEffect, useState } from 'react'
import { v4 } from 'uuid';
import { useSelector,useDispatch } from 'react-redux';
import { getAllItems } from '../store/actions/items';

const Home = (props) => {

    const dispatch = useDispatch();
    const [itemName, setItemName] = useState('');
    const {items} = useSelector(state=>state);


    useEffect(()=>{
        if(!items[0]){
            getAllItems(dispatch);
        }
    },[items])

    const saveItem = () => {
        dispatch({
            type:'ADD_NEW_ITEM',
            payload:{
                id: v4(),
                title: itemName,
                completed: false
            }
        });
    }

    const changeStatus=(id)=>{
        dispatch({
            type:'MARK_COMPLETED',
            payload:{
                id:id
            }
        });
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
                                    <p className={`${item.completed? 'line-through	':''}`}>{item.title}</p>
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