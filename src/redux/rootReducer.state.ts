import {combineReducers} from '@reduxjs/toolkit';
import sliceName from './sliceName.state';
import productsSliceM from './modules/products/products.slice.m';

const rootReducer = combineReducers({
  [sliceName.products]: productsSliceM,
});
export default rootReducer;
