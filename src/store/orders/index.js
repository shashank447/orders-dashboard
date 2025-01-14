import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
  name: 'orderSlice',
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const { increment, decrement } = orderSlice.actions;
export const { selectCount } = orderSlice.selectors;
export default orderSlice.reducer;
