/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  status: 'idle',
};

export const fetchReservation = createAsyncThunk(
  'reservation/fetchReservation',
  async () => {
    const response = await fetch(
      'https://blue-dreams-back-end.herokuapp.com/reservation',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token'),
        },
      },
    );
    if (response.ok) {
      return response.json();
    }
    throw response.json();
  },
);

export const ReservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReservation.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchReservation.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      });
  },
});

export default ReservationSlice.reducer;
