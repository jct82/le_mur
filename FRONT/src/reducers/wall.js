import { CHANGE_PANEL, TOGGLE_EYE } from "src/actions/wall";

const initialState = {
  panel: '',
  detailed: -1,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_PANEL :
      return{
        ...state,
        panel: action.panel,
      }
    case TOGGLE_EYE :
      return{
        ...state,
        detailed: action.detailed,
      }
    default:
      return state;
  }
};

export default reducer;
