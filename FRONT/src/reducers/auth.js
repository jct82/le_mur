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
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
