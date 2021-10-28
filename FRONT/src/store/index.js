import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';
import authMiddleware from '../middlewares/authMiddlware';
import wallMiddleware from '../middlewares/wallMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(authMiddleware, wallMiddleware),
);

const store = createStore(reducer, enhancers);

export default store;
