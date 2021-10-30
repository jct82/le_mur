import axios from 'axios';

const wallMiddleware = (store) => (next) => (action) => {
  console.log(action);
  const state = store.getState();
  switch (action.type) {
    case 'CREATE_WALL': {
      // TODO creation du formadata
      const wallData = new FormData();
      wallData.append('photo', action.picture);
      wallData.append('title', state.walls.wallCreation.title);
      wallData.append('description', state.walls.wallCreation.description);
      wallData.append('users', state.walls.wallCreation.users);
      const config = {
        method: 'post',
        baseURL: 'http://54.196.235.242/user/',
        url: '/walls',
        data: wallData,
        headers: { 'Content-Type': 'multipart/form-data' },
      };
      axios(config)
        .then((response) => {
          console.log(response, 'ok mur crée');
        })
        .catch ((error) => {
          console.error(error);
        });
      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default wallMiddleware;
