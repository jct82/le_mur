import { SET_WALL_INFO } from "src/actions/wall";

const initialState = {
  wallsList: [],
  wallCreation: {
    title: '',
    description: '',
    users: [],
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'STORE_WALLS':
      return {
        ...state,
        wallsList: action.data.result.map((wall) => ({
          ...wall,
          users: action.data.collabsData.filter((collabData) => collabData.wallId === wall.id)
        })),
      };
    case 'STORE_NEW_WALL':
      return {
        ...state,
        wallsList: [
          ...state.wallsList,
          {...action.newWall,
            id: action.id,
            users: action.collabsData,
          },
        ],
      };
    case 'GET_WALLS':
      return {
        ...state,
      };
    case 'DELETE_COWORKER':
      return {
        ...state,
        wallCreation: {
          ...state.wallCreation,
          users: state.wallCreation.users.filter((user) => user !== action.user),
        },
      };
    case 'STORE_WALL_INPUT':
      return {
        ...state,
        wallCreation: {
          ...state.wallCreation,
          // eslint-disable-next-line no-nested-ternary
          [action.name]: action.name === 'users'
            ? !state.wallCreation.users.includes(action.value)
              ? [...state.wallCreation.users, action.value] : [...state.wallCreation.users]
            : action.value,
        },
      };
    case 'EMPTY_WALLS_LIST':
      return {
        ...state,
        wallsList: [],
      };
    case 'DELETE_WALL_FROM_STORE':
      return {
        ...state,
        wallsList: [
          ...state.wallsList.filter((wall) => wall.id !== action.wallId)
        ],
      };
    case SET_WALL_INFO:
      return {
        ...state,
        wallCreation: {
          ...state.wallCreation,
          // eslint-disable-next-line no-nested-ternary
          [action.name]: action.name === 'users'
            ? !state.wallCreation.users.includes(action.value)
              ? [...state.wallCreation.users, action.value] : [...state.wallCreation.users]
            : action.value,
        },
      };

    default:
      return state;
  }
};

export default reducer;
