import { createSlice } from '@reduxjs/toolkit';

const sharedDataSlice = createSlice({
  name: 'sharedData',
  initialState: {
    value: 'Initial shared value',
  },
  reducers: {
    setSharedData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSharedData } = sharedDataSlice.actions;
export default sharedDataSlice.reducer;
