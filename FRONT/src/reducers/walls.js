// const initialState = {
//   id: 1,
//   title: '',
//   description: '',
//   image: '',
//   users: [],
//   owner: '',
//   titleColor: '',
//   column: [],
//   elements: [],
// };

const initialState = {
  wallsList: [
    {
      id: 1,
      title: 'rap',
      titleColor: 'DarkSlateGrey',
      // photo: '/tyler.png',
      photo: 'http://localhost:3000/API-omur/public/photo-1636027813317-102630879.jpg',
      users: ['antoine', 'julien', 'ari'],
      description: 'description du thème Rap: Le rap est un mouvement culturel et musical qui tire ses origines du hip-hop',
    },
    {
      id: 2,
      title: 'grunge',
      titleColor: 'IndianRed',
      photo: '/grunge.jpg',
      users: ['kurt', 'vile', 'wipers', 'army of one'],
      description: 'Le grunge est un genre musical dérivé du rock et une culture underground, apparu au début des années 1990 essentiellement autour de Seattle dans l\'État de Washington. Il est considéré comme la forme la plus populaire du rock alternatif1 au niveau mondial ',
    },
    {
      id: 3,
      title: 'psychedelic',
      titleColor: 'orange',
      photo: '/psychedelic.jpg',
      users: ['mars red sky', 'los bitchos', 'lice', 'melenas', 'tina'],
      description: 'un mouvement de contre-culture apparu dans le milieu des années 1960 qui s\'occupe des corrélations entre les sens et les activités psychiques, dans un contexte artistique, généralement en rapport avec des psychotropes,',
    },
    {
      id: 4,
      title: 'collages',
      titleColor: 'black',
      photo: '/collage.png',
      users: ['andre diskov', 'Etiene duplateau', 'clint eastwood'],
      description: 'Le collage est une technique de création artistique qui consiste à réaliser une création plastique par la combinaison d\'éléments de diverses natures : matériaux plus ou moins plats, comme la toile cirée imprimée, peinture ou dessin, extraits de journaux avec texte et photos, papier peint, documents, objets divers de faible relief, etc.. Lorsque le relief est en jeu il s\'agit alors d\'un assemblage.',
    },
  ],
  wallCreation: {
    title: '',
    description: '',
    users: [],
  },
};

const reducer = (state = initialState, action = {}) => {
  console.log(action)
  switch (action.type) {
    case 'STORE_WALLS':
      return {
        ...state,
        wallsList: action.data.result.map(wall => ({
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
        wallsList :[]
      }
    case 'DELETE_WALL_FROM_STORE':
      return {
        ...state,
        wallsList: [
          ...state.wallsList.filter((wall) => wall.id !== action.wallId)
        ]
      }
    default:
      return state;
  }
};

export default reducer;
