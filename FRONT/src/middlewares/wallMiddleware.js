// import axios from 'axios';
import { deleteWallFromStore, storeNewWall } from '../actions/wall';
import { storeAllWalls } from '../actions/walls';
import API from './api';

const wallMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    case 'CREATE_WALL': {
      // TODO on va chercher dans le store la liste de tous les utilisateurs
      // ( allUsers) et les users du mur (wallUsers)
      const wallUsers = state.walls.wallCreation.users;
      const allUser = state.user.users;

      // apres on va récupérer l'id des utilisateurs
      // du mur en comparant avec la liste de tout les utilisateurs
      const usersId = wallUsers.map((user) => allUser.filter((oneUser) => oneUser.name === user));
      const wallUserIds = usersId.map((user) => user[0].id);

      // on crée un formData à envoyer au back
      const wallData = new FormData();
      wallData.append('photo', action.picture);
      wallData.append('title', state.walls.wallCreation.title);
      wallData.append('description', state.walls.wallCreation.description);
      wallData.append('users', wallUserIds);
      wallData.append('title_color', action.title_color);
      const config = {
        method: 'post',
        url: '/user/walls',
        data: wallData,
        headers: { 'Content-Type': 'multipart/form-data' },
      };
      API(config)
        .then((response) => {
          console.log(response.data, 'ok mur crée');
          store.dispatch(storeNewWall(response.data));
        })
        .catch((error) => {
          console.error(error);
        });
      next(action);
      break;
    }
    case 'DELETE_WALL_ACTION': {
      const config = {
        method: 'delete',
        url: `/user/walls/${action.wallId}`,
      };
      API(config)
        .then((response) => {
          console.log('mur effacé');
          store.dispatch(deleteWallFromStore(action.wallId));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    case 'GET_WALLS': {
      const config = {
        method: 'get',
        url: '/user/walls',
      };
      API(config)
        .then((response) => {
          console.log(response.data);
          store.dispatch(storeAllWalls(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default wallMiddleware;
