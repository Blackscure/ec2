// eslint-disable-next-line import/no-extraneous-dependencies
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux'; // Optional, for asynchronous actions
import rootReducer from '../reducers'; // Import your root reducer

const middleware = [thunk]; // You can add more middleware if needed

const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
);

export default store;
