// import axios from 'axios';

const authMiddleware = (store) => (next) => (action) => {
  // const state = store.getState();
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
    default:
      next(action);
  }
};

export default authMiddleware;
