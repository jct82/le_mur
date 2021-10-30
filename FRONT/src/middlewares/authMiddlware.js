import axios from 'axios';
import { logUser } from '../actions/users';

const authMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    // case 'SUBMIT_USER_CREDENTIALS': {
    //   const config = {
    //     method: 'post',
    //     baseURL: 'http://localhost:3001/',
    //     url: '/login',
    //     data: {
    //       email: state.user.userCredentials.email,
    //       password: state.user.userCredentials.password,
    //     },
    //   };
    //   axios(config)
    //     .then((response) => {
    //       console.log(response.data);
    //       store.dispatch(logUserIn(response.data));
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    //   next(action);
    //   break;
    // }
    case 'CREATE_USER': {
      const config = {
        method: 'post',
        baseURL: 'http://54.196.235.242/user/',
        url: '/register',
        data: {
          name: state.user.name,
          lastname: state.user.lastname,
          email: state.user.email,
          password: state.user.password,
        },
      };
      axios(config)
        .then((response) => {
          console.log(response.data);
          if (response.status === 200)store.dispatch(logUser(response.data));
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
