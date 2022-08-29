import React from 'react'
import { Link } from 'react-router-dom'



const Menu = () => {
  return (
    <div className='w-full bg-blue-500 text-white p-4'>
        <div className='flex flex-row justify-center space-x-4'>
            <Link to='/'>All</Link>
            <Link to='/completed'>Completed</Link>
        </div>
    </div>
  )
}

export default Menu