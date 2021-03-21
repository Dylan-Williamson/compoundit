import { configureStore } from '@reduxjs/toolkit';
import calculatorReducer from '../redux/calculatorSlice';

export default configureStore({
  reducer: {
    calculator: calculatorReducer,
  },
});
