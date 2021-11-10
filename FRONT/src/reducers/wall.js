import { CHANGE_PANEL, TOGGLE_EYE, POST_USER, DELETE_USER, UPDATE_DOC_PROPS, DISPLAY_MODE, REDIRECT_PDF, SET_WALL } from "src/actions/wall";
import { ADD_DOC, DELETE_DOC, UPDATE_DOC } from "src/actions/element";

const initialState = {
  id: 1,
  admin: 1,
  title: 'Rap',
  photo: '/tyler.png',
  users: ['jeancharles', 'ariana', 'julien'],
  description: 'description du thème Rap: Le rap est un mouvement culturel et musical qui tire ses origines du hip-hop',
  dateStart: '20/10/2021',
  dateChange: '28/10/2021',
  currentAdded: '',
  panel: '',
  detailed: -1,
  displaysquare: false,
  toPDF:false,
  docList:[],
};

const localPath = 'http://localhost:3000/';

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_WALL :
      let linkArray;
      const newDocList = action.docList.map((elem) => {
        if (elem.type == 'image') elem.src = localPath+elem.src;
        elem.link == null ? linkArray = [] : linkArray = elem.link.split('\\');
        return({...elem, src: elem.src, link: linkArray, width:2, height:3});
      });
      return{
        ...state,
        docList: newDocList,
      }
    case ADD_DOC : {
      const { id, name, description, type, position, link, src, owner_id } = action.doc;
      let srcEdit = src;
      if (type == 'image') srcEdit = localPath+src;
      console.log('srcEdit', srcEdit);
      const idList = state.docList.map((elem) => {
        return elem.id;
      }); 
      const newDoc = {
        id: id,
        name: name,
        description: description,
        type: type,
        position: position,
        link: link,
        src: srcEdit,
        owner_id: owner_id,
        width:2,
        height:3,
      };
      const allDocs = state.docList;
      const newDocs = [
        ...allDocs,
        newDoc,
      ];
      return{
        ...state,
        docList: newDocs,
      }
    }
    case DELETE_DOC : {
      const newList = state.docList.map((doc) => {
        if (doc.id != action.id) return doc;
      });
      return{
        ...state,
        docList: newList,
      }
    }
    case UPDATE_DOC : {
      let newDoc = action.doc;
      let newDocList = state.docList.map((doc) => {
        if (doc.id != action.doc.id) return doc;
      });
      if (newDoc.type == 'image') newDoc.src = localPath+newDoc.src;
      newDoc.link = newDoc.link.split('\\');
      newDocList = [...newDocList, newDoc];
      return{
        ...state,
        docList: newDocList,
      }
    }
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
    case POST_USER:{
      const allUsers = state.users;
      const newUsers = [
        ...allUsers,
        action.user,
      ];
      return{
        ...state,
        users: newUsers,
        currentAdded: '',
      }
    }
    case DELETE_USER :{
      const allUsers = state.users;
      const newUsers = allUsers.filter((user) => {
        return user != action.user;
      });

      return{
        ...state,
        users: newUsers,
        currentAdded: '',
      }
    }
    case UPDATE_DOC_PROPS :
      return{
        ...state,
        [action.prop]: action.name,
      }
    case DISPLAY_MODE :
      return{
        ...state,
        displaysquare: !state.displaysquare,
      }
    case REDIRECT_PDF :
        return{
          ...state,
          toPDF: !state.toPDF,
        }
    default:
      return state;
  }
};

export default reducer;
