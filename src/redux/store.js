import { configureStore } from '@reduxjs/toolkit';
import reservation from './reducer/registration';
import user from './redux/reducer/user';
import ship from './redux/reducer/ship';

export default configureStore({
  reducer: {
    reservation,
    user,
    ship,
  },
});

export default store;
