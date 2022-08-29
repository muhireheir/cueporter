import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Menu from './app/components/Menu'
import Routes from './app/routes/Routes'
import { v4 } from 'uuid';


const App = () => {


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
    <BrowserRouter>
      <Menu />
      <Routes 
      items={items}
      changeStatus={changeStatus}
      saveItem={saveItem}
      setItemName={setItemName} />
    </BrowserRouter>
  )
}

export default App