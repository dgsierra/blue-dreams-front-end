import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const SignUp = '/signup';
const Login = '/login';
const Logout = '/logout';
const user = await response.json();
const Path = 'http://127.0.0.1:3000'

const initialState = {
    user: [],
  };

export const logInUser = createAsyncThunk(Login, async (state) => {
  const response = await fetch(`${Path}/login`, {
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(state),
  });
  return user;
});

export const signUpUser = createAsyncThunk(SignUp, async (state) => {
  const response = await fetch(`${Path}/signup`, {
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(state),
  });
  return user;
});

export const LogOutUser = createAsyncThunk(Logout, async (state) => {
  const response = await fetch(`${Path}/logout`, {
    method: 'delete',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(state),
  });
  return user;
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.fulfilled, (state, action) => ({
        user: action.payload.status.data,
        lifecycle: { loading: 'loaded' },
      }))
      .addCase(createUser.rejected, (state) => ({
        ...state,
        lifecycle: { loading: 'rejected' },
      }))
      .addCase(logInUser.fulfilled, (state, action) => ({
        user: action.payload.status.data,
        lifecycle: { loading: 'loaded' },
      }))
      .addCase(logInUser.rejected, (state) => ({
        ...state,
        lifecycle: { loading: 'rejected' },
      }))
      .addCase(logOutUser.fulfilled, (state) => ({
        ...state,
        user: [],
        lifecycle: { loading: 'loaded' },
      }))
      .addCase(logOutUser.rejected, (state) => ({
        ...state,
        lifecycle: { loading: 'rejected' },
      }));
  },
});

export default userSlice.reducer;
