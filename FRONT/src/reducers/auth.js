const initialState = {
  email: '',
  password: '',
  token: '',
  name: '',
  lastname: '',
  role: '',
  logged: false,
  credentials: {
    email: '',
    password: '',
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'STORE_USER_LOGIN_INPUT':
      return {
        ...state,
        credentials: {
          ...state.credentials,
          [action.name]: action.inputValue,
        },
      };
    case 'STORE_USER_REGISTER_INPUT':
      return {
        ...state,
        [action.name]: action.value,
      }
    default:
      return state;
  }
};

export default reducer;

