import { UPDATE_DOC_PROPS, POST_LINK  } from "src/actions/wall";

const initialState = {
  id: 1,
  name: '',
  description: '',
  type: '',
  position: 1,
  currentLink: '',
  link: [],
  urlSrc: '',
  OwnerId: 1,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_DOC_PROPS :
      return{
        ...state,
        [action.prop]: action.name,
      }
    case POST_LINK :{
      const allLinks = state.link;

      const newLinks = [
        ...allLinks,
        action.link,
      ];
      return{
        ...state,
        link: newLinks,
        currentLink: '',
      }
    }
    default:
      return state;
  }
};

export default reducer;
