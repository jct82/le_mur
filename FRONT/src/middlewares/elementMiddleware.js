// import axios from 'axios';

import { GET_WALL, GET_WALL_INFO, setWall, setWallInfo } from "src/actions/wall";
import { POST_DOC, SUP_DOC, CHANGE_DOC, addDoc, deleteDoc, updateDoc } from "src/actions/element";

import API from './api';

const wallMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  const { id } = state.wall;
  switch (action.type) {
    case POST_DOC: {

      // on crée un formData à envoyer au back
      const { name, description, type, src, link, position, owner_id, img } = state.elements;
      
      let linkToPost =  ''; 
      link.forEach((elem) => {
        linkToPost = linkToPost + elem + '\\';
      });
      linkToPost = linkToPost.slice(0, -1);
      const docData = new FormData();
      docData.append('name', name);
      docData.append('description', description);
      docData.append('type', type);
      if (type == 'image') docData.append('photo', img);
      docData.append('src', src);
      docData.append('link', linkToPost);
      docData.append('position', position);
      docData.append('owner_id', owner_id);
      console.log('docData1111', docData);
      const config = {
        method: 'post',
        url:  `/user/walls/${id}/elements`,
        data: docData,
        headers: { 'Content-Type': 'multipart/form-data' },
      };
      API(config)
        .then((response) => {
          console.log(response.data, 'élément crée');
          store.dispatch(addDoc(state.elements));
        })
        .catch((error) => {
          console.error(error);
        });
      next(action);
      break;
    }
    case CHANGE_DOC: {
      const doc = state.elements;
      const docList = state.wall.docList;
      const FormerDoc = docList.find((elem) => elem.id == doc.id);

      const docData = new FormData();
      let index = 0;
      let propName = '';
      for (let prop in doc) {
        propName = Object.keys(doc)[index];
        if (doc[prop] != FormerDoc[prop] && FormerDoc.hasOwnProperty(propName)) {
          console.log('propName', propName);
          console.log('doc[prop]', doc[prop]);
          docData.append(propName, doc[prop]);
        }
        index++;
      }
      console.log('docData',docData);
      const config = {
        method: 'dispatch',
        url: `/user/walls/${state.wall.id}/elements/${doc.id}`,
        data: docData,
        headers: { 'Content-Type': 'multipart/form-data' },
      };
      API(config)
        .then((response) => {
          console.log('doc changé');
          store.dispatch(updateDoc())
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    case SUP_DOC: {
      const config = {
        method: 'delete',
        url: `/user/walls/${state.wall.id}/elements/${state.elements.id}`,
      };
      API(config)
        .then((response) => {
          console.log('doc effacé');
          store.dispatch(deleteDoc(state.elements.id));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    case GET_WALL: {
      const config = {
        method: 'get',
        url: `/user/walls/${id}/elements`,
      };
      API(config)
        .then((response) => {
          console.log('récupère les éléments',response.data);
          store.dispatch(setWall(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    case GET_WALL_INFO: {
      const config = {
        method: 'get',
        url: `/user/walls/${id}`,
      };
      API(config)
        .then((response) => {
          console.log('récupère les infos du mur',response.data);
          store.dispatch(setWallInfo(response.data));
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
