import { CHANGE_PANEL, TOGGLE_EYE, POST_USER, DELETE_USER, UPDATE_DOC_PROPS } from "src/actions/wall";

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
    default:
      return state;
  }
};

export default reducer;
