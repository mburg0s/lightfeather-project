import { configureStore } from '@reduxjs/toolkit';
import supervisorReducer from '../features/formSlice';

export const store = configureStore({
  reducer: {
    supervisor: supervisorReducer,
  }
});
