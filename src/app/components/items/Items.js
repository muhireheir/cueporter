import React from 'react'
import Item from './Item'

const Items = ({ items, changeStatus }) => {
    return (
        <div className='mt-4'>
            <p>All Items</p>
            <div>
                {items.map((item) => {
                    return (
                        <Item key={item.id} changeStatus={changeStatus} item={item} />
                    )
                })}
            </div>
        </div>
    )
}

export default Items