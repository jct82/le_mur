import { loginErrors, logUser, updatedUser } from '../actions/users';
import API from './api';

const authMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    case 'SUBMIT_USER_LOGIN': {
      const config = {
        method: 'post',
        url: '/user/login',
        data: {
          email: state.user.credentials.email,
          password: state.user.credentials.password,
        },
      };
      API(config)
        .then((response) => {
          if (response.status === 200) {
            store.dispatch(logUser(response.data));
          }
        })
        .catch((error) => {
          store.dispatch(loginErrors(error.response.data));
        });
      next(action);
      break;
    }
    case 'CREATE_USER': {
      const config = {
        method: 'post',
        url: '/user/register',
        data: {
          name: state.user.name,
          lastname: state.user.lastname,
          email: state.user.email,
          password: state.user.password,
        },
      };

      API(config)
        .then((response) => {
          if (response.status === 200) {
            store.dispatch(logUser(response.data));
          }
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    case 'UPDATE_USER': {
      const config = {
        method: 'patch',
        url: '/user/login',
        data: {
          name: state.user.name,
          lastname: state.user.lastname,
          password: state.user.password,
        },
      };
      API(config)
        .then((response) => {
          if (response.status === 200) {
            store.dispatch(updatedUser(response.data.updatedUser));
          }
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

export default authMiddleware;
