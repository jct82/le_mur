// import axios from 'axios';

import { ADD_DOC } from "src/actions/wall";
import API from './api';

const wallMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    case ADD_DOC: {

      // on crée un formData à envoyer au back
      const { name, description, type, src, link, position, ownerid } = state.elements;
      const { id } = state.wall;


      console.log('ttttttt',id, name, description, type, src, link, position);
      const docData = new FormData();
      docData.append('name', name.toString());
      docData.append('description', description.toString());
      docData.append('type', type.toString());
      docData.append('src', src.toString());
      docData.append('link', link[0]);
      docData.append('position', position);
      docData.append('owner_id', ownerid);
      const config = {
        method: 'post',
        url:  `/user/walls/${id}/elements`,
        data: docData,
        headers: { 'Content-Type': 'multipart/form-data' },
      };
      API(config)
        .then((response) => {
          console.log(response.data, 'élément crée');
        })
        .catch((error) => {
          console.log('walou');
          console.error(error);
        });
      next(action);
      break;
    }
    // case 'DELETE_WALL_ACTION': {
    //   const config = {
    //     method: 'delete',
    //     url: `/user/walls/${action.wallId}`,
    //   };
    //   API(config)
    //     .then((response) => {
    //       console.log('mur effacé');
    //       store.dispatch(deleteWallFromStore(action.wallId));
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    //   next(action);
    //   break;
    // }
    // case 'GET_WALLS': {
    //   const config = {
    //     method: 'get',
    //     url: '/user/walls',
    //   };
    //   API(config)
    //     .then((response) => {
    //       console.log(response.data);
    //       store.dispatch(storeAllWalls(response.data));
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    //   next(action);
    //   break;
    // }
    default:
      next(action);
  }
};

export default wallMiddleware;
