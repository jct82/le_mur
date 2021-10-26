const initialState = {
  id: 1,
  title: '',
  description: '',
  image: '',
  users: [],
  owner: '',
  titleColor: '',
  column: [],
  elements: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
