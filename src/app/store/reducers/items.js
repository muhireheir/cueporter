const initialState = [
    {
      id: 1,
      name: 'Item 1',
      completed: false
    },
    {
      id: 2,
      name: 'Item 2',
      completed: true
    }
  ]
  const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_NEW_ITEM':
        return [...state, { ...action.payload }];
      case 'MARK_COMPLETED':
        const updatedItems = state.map(item => {
          if (item.id === action.payload.id) {
            return { ...item, completed: !item.completed }
          }
          return item;
        });
        return updatedItems;
      default:
        return state;
  
    }
  }


  export default itemsReducer;