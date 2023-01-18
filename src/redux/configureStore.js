import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import userRedux from './user/userSlice';

const store = configureStore({
  reducer: {
    user: userRedux,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
  
export default store;
