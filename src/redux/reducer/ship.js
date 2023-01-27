/* eslint-disable import/no-extraneous-dependencies */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = [];

export const postSignup = createAsyncThunk('users/signup', async (user) => {
  await fetch('https://blue-dreams-back-end.herokuapp.com/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user }),
  }).then((res) => {
    if (res.ok) {
      localStorage.setItem('token', res.headers.get('Authorization'));
      return res.json();
    }
    throw res.json();
  });
});

export const postLogIn = createAsyncThunk('users/login', async (user) => {
  await fetch('https://blue-dreams-back-end.herokuapp.com/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user }),
  }).then((res) => {
    if (res.ok) {
      localStorage.setItem('token', res.headers.get('Authorization'));
      return res.json();
    }
    return res.text().then((text) => Promise.reject(text));
  });
});

export const reservationSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postLogIn.fulfilled, (state, action) => action.payload);
  },
});

export default reservationSlice.reducer;
