import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  status: 'idle',
};

export const fetchRegistration = createAsyncThunk(
  'registration/fetchRegistration',
  async () => {
    const response = await fetch(
      'https://blue-dreams-back-end.herokuapp.com/registration',
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

export const RegistrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRegistration.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRegistration.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      });
  },
});

export default registrationSlice.reducer;
