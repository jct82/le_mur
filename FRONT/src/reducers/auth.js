const initialState = {
  email: '',
  password: '',
  token: '',
  name: '',
  lastName: '',
  role: '',
  logged: false,
};

const reducer = (state = initialState, action = {}) => {
  console.log(action);
  switch (action.type) {
    case 'STORE_USER_LOGIN_INPUT':
      return {
        ...state,
        [action.name]: action.inputValue,
      };

    default:
      return state;
  }
};

export default reducer;
