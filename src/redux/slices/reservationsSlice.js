/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const baseUrl = 'http://127.0.0.1:3000/reservations/';

export const fetchReservations = createAsyncThunk('reservations/fetchReservations', async () => {
  const response = await fetch(`${baseUrl}index/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token'),
    },
  });
  const data = await response.json();
  return data;
});

export const createReservation = createAsyncThunk('reservations/createReservation', async (reservation) => {
  const response = await fetch(`${baseUrl}create/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token'),
    },
    body: JSON.stringify(reservation),
  });
  const data = await response.json();
  return data;
});

export const deleteReservation = createAsyncThunk('reservations/deleteReservation', async (id) => {
  const response = await fetch(`${baseUrl}destroy/`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token'),
    },
    body: JSON.stringify(id),
  });
  const data = await response.json();
  return data;
});

export const reservationsSlice = createSlice({
  name: 'reservations',
  initialState: {
    reservations: [],
    status: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createReservation.fulfilled, (state, action) => {
        state.reservations.push(action.payload);
      })
      .addCase(deleteReservation.fulfilled, (state, action) => {
        state.reservations = state.reservations.filter((reservation) => reservation.id !== action.payload.id);
      })
      .addCase(fetchReservations.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchReservations.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.reservations = action.payload;
      })
      .addCase(fetchReservations.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default reservationsSlice.reducer;
