import { storeAllUsers } from '../actions/users';
import API from './api';

const userMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    case 'GET_ALL_USERS': {
      const config = {
        method: 'get',
        url: '/user/list',
      };
      API(config)
        .then((response) => {
          store.dispatch(storeAllUsers(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default userMiddleware;
