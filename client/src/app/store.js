import { configureStore } from '@reduxjs/toolkit';
import supervisorReducer from '../features/formSlice';
// import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    supervisor: supervisorReducer,
  }
  //  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});
