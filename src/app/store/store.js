import { configureStore } from '@reduxjs/toolkit'
import itemsReducer from './reducers/items'

const store = configureStore({
    reducer: {
      items: itemsReducer,
    }, devTools: true
  })

export default store;