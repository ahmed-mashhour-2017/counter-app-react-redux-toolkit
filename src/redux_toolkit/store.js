import { configureStore } from '@reduxjs/toolkit'
import   my_counterSlice   from './reducers/counter_slice';

export const store = configureStore({
  reducer: {
 counter:my_counterSlice,
  }, 
})
