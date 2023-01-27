/* eslint-disable import/no-extraneous-dependencies */
import { configureStore } from '@reduxjs/toolkit';
import user from './reducer/user';
import { shipsApi } from './slices/ships-slice';
import reservations from './slices/reservationsSlice';

export default configureStore({
  reducer: {
    user,
    reservations,
    [shipsApi.reducerPath]: shipsApi.reducer,
  },
  // eslint-disable-next-line max-len
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shipsApi.middleware),
});
