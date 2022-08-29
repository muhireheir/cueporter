import React from 'react'

const Item = ({item,changeStatus}) => {
  return (
    <div key={item.id} className='w-full bg-gray-100 p-3 mt-1 flex justify-between'>
    <p className={`${item.completed? 'line-through	':''}`}>{item.name}</p>
    <input type="checkbox" checked={item.completed}  onChange={()=>changeStatus(item.id)} />
</div>
  )
}

export default Item