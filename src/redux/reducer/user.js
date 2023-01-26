/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  name: '',
  status: 'idle',
  id: null,
  admin: false,
  license: false,
  email: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signUp: (state, action) => {
      state.data = action.payload;
      state.id = action.payload.id;
      state.admin = action.payload.admin;
      state.license = action.payload.license;
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.token = action.payload.token;
    },
    logOut: (state) => {
      state.data = [];
      state.id = null;
      state.admin = false;
      state.license = false;
      state.email = '';
      state.name = '';
      state.token = null;
    },
  },
});

export const { signUp, logOut } = userSlice.actions;
export default userSlice.reducer;
