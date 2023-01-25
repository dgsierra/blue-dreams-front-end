/* eslint-disable import/no-extraneous-dependencies */
import { configureStore } from '@reduxjs/toolkit';
import reservation from './reducer/reservation';
import user from './reducer/user';
import ship from './reducer/ship';

export default configureStore({
  reducer: {
    reservation,
    user,
    ship,
  },
});
