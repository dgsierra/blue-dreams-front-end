/* eslint-disable import/no-extraneous-dependencies */
import { configureStore } from '@reduxjs/toolkit';
import reservation from './reducer/reservation';
import user from './reducer/user';
import ship from './reducer/ship';
import { shipsApi } from './slices/ships-slice';

export default configureStore({
  reducer: {
    reservation,
    user,
    ship,
    [shipsApi.reducerPath]: shipsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shipsApi.middleware),
});
