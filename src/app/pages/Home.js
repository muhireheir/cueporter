import React from 'react'
import Items from '../components/items/Items'


const Home = (props) => {

    return (
        <div className="w-full flex justify-center mt-3">
            <div >
                <div>
                    <input className='border p-2' onChange={(e) => props.setItemName(e.target.value)} />
                    <button className="block p-3 bg-blue-500 text-white mt-1" onClick={props.saveItem}>Save Item</button>
                </div>
                <Items items={props.items} changeStatus={props.changeStatus} />
            </div>
        </div>
    )
}

export default Home