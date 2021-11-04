import axios from 'axios';
import { logUser } from '../actions/users';
import API from './api';
// const API = axios.create({ baseURL: 'http://54.196.235.242/user/' });

const authMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    case 'SUBMIT_USER_LOGIN': {
      const config = {
        method: 'post',
        // baseURL: 'http://54.196.235.242/user/',
        url: '/user/login',
        data: {
          email: state.user.credentials.email,
          password: state.user.credentials.password,
        },
      };
      API(config)
        .then((response) => {
          console.log(response.data);
          store.dispatch(logUser(response.data)); // renvoyer le new User name et lastName et Id.
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    case 'CREATE_USER': {
      const config = {
        method: 'post',
        // baseURL: 'http://54.196.235.242/user/',
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
          console.log(response.data);
          if (response.status === 200) {
            console.log(response.data);
            store.dispatch(logUser(response.data));
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
