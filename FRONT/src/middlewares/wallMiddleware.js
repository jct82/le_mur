import axios from 'axios';

const wallMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    default:
      next(action);
  }
};

export default wallMiddleware;
