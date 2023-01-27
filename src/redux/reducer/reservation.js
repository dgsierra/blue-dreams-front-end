/* eslint-disable no-param-reassign */
// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  status: 'idle',
};

export const getReservation = createAsyncThunk(
  'reservation/getReservation',
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

export const postReservation = createAsyncThunk(
  'reservations/postReservation',
  async (object) => {
    const response = await fetch(
      'https://blue-dreams-back-end.herokuapp.com/reservations/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token'),
        },
        body: JSON.stringify(object),
      },
    );
    if (response.ok) {
      return response.json();
    }
    throw response.json();
  },
);

export const deleteReservation = createAsyncThunk(
  'reservations/deleteReservations',
  async (id) => {
    await fetch(
      `https://blue-dreams-back-end.herokuapp.com/reservation/destroy/${id}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token'),
        },
      },
    );
  },
);

export const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getReservation.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getReservation.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(postReservation.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(postReservation.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(deleteReservation.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteReservation.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      });
  },
});

export default reservationSlice.reducer;
