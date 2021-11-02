import { UPDATE_DOC_PROPS, POST_LINK, DELETE_LINK, VIEW_DOC, EMPTY_FORM } from "src/actions/element";

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
    case DELETE_LINK :{
      const allLinks = state.link;
      const newLinks = allLinks.filter((link) => {
        return link != action.link
      });

      return{
        ...state,
        link: newLinks,
        currentLink: '',
      }
    }
    case VIEW_DOC :
      const {id, name, description, type, link, urlSrc, ownerId} = action.doc;
      return{
        ...state,
        id: id,
        name: name,
        description: description,
        type: type,
        link: link,
        urlSrc: urlSrc,
        ownerId: ownerId,
      }
    case EMPTY_FORM :
      const {nameF, descriptionF, typeF, linkF, urlSrcF, currentLinkF} = action.doc;
      return{
        ...state,
        name: nameF,
        description: descriptionF,
        type: typeF,
        link: linkF,
        urlSrc: urlSrcF,
        currentLink: currentLinkF,
      }
    default:
      return state;
  }
};

export default reducer;
