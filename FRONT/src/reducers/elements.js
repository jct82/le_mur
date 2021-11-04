import { UPDATE_DOC_PROPS, POST_LINK, DELETE_LINK, VIEW_DOC, EMPTY_FORM } from "src/actions/element";

const initialState = {
  id: 1,
  name: '',
  description: '',
  type: '',
  position: 1,
  currentLink: '',
  link: [],
  src: '',
  ownerid: 1,
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
      const {id, name, description, type, link, src, ownerid} = action.doc;
      return{
        ...state,
        id: id,
        name: name,
        description: description,
        type: type,
        link: link,
        src: src,
        ownerid: ownerid,
      }
    case EMPTY_FORM :
      const {nameF, descriptionF, typeF, linkF, srcF, currentLinkF} = action.doc;
      return{
        ...state,
        name: nameF,
        description: descriptionF,
        type: typeF,
        link: linkF,
        src: srcF,
        currentLink: currentLinkF,
      }
    default:
      return state;
  }
};

export default reducer;
