import { createSlice } from '@reduxjs/toolkit'

 
export const my_counterSlice = createSlice({
  name: 'counter',
  initialState : {
    count: 0,
  },
  reducers: {
    inc_action: (state) => {
           state.count += 1
    },
    dec_action: (state) => {
      state.count -= 1
    },
    inc_action_by_val: (state, action) => {
      state.count += action.payload
    },
    dec_action_by_val: (state, action) => {
        state.count -= action.payload
      },
   
  },
})

 export const { inc_action,dec_action, inc_action_by_val, dec_action_by_val } = my_counterSlice.actions

export default my_counterSlice.reducer