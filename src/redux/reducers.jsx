import { createSlice } from '@reduxjs/toolkit';

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  reducers: {
    fetchWeatherRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchWeatherSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    fetchWeatherFailure(state, action) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

// Export the actions
export const { fetchWeatherRequest, fetchWeatherSuccess, fetchWeatherFailure } = weatherSlice.actions;

// Export the reducer
export default weatherSlice.reducer;
