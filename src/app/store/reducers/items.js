const initialState = [
    
  ]
  const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_ALL_ITEMS':
        return action.payload;
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