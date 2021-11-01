const initialState = {
  id: 1,
  email: '',
  password: '',
  token: '',
  name: '',
  lastname: '',
  role: '',
  logged: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'STORE_USER_LOGIN_INPUT':
      return {
        ...state,
        [action.name]: action.inputValue,
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

