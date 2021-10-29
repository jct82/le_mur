export const storeUSerInputValue = (name, value) => (
  { type: 'STORE_USER_LOGIN_INPUT', name: name, inputValue: value }
);

export const storeUserRegisterInput = (inputName, inputValue) => (
  { type: 'STORE_USER_REGISTER_INPUT', name: inputName, value: inputValue }
);

export const createUser = () => (
  { type: 'CREATE_USER' }
);
