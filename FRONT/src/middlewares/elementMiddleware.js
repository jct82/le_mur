// import axios from 'axios';

import { GET_WALL, GET_WALL_INFO, setWall, setWallInfo } from "src/actions/wall";
import { POST_DOC, SUP_DOC, CHANGE_DOC, addDoc, deleteDoc, updateDoc, emptyForm } from "src/actions/element";

import API from './api';

const wallMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  const { id } = state.wall;
  switch (action.type) {
    case POST_DOC: {

      // on crée un formData à envoyer au back
      const { name, description, type, src, link, position, owner_id, img } = state.elements;
      
      let linkToPost = link.join('\\');
      const docData = new FormData();
      docData.append('name', name);
      docData.append('description', description);
      docData.append('type', type);
      if (type == 'image') docData.append('photo', img);
      docData.append('src', src);
      docData.append('link', linkToPost);
      docData.append('position', position);
      docData.append('owner_id', owner_id);
      console.log('position element créé', docData.get('position'));
      const config = {
        method: 'post',
        url:  `/user/walls/${id}/elements`,
        data: docData,
        headers: { 'Content-Type': 'multipart/form-data' },
      };
      API(config)
        .then((response) => {
          console.log(response.data, 'élément crée');
          store.dispatch(addDoc(response.data));
          setTimeout(store.dispatch(emptyForm()), 500);
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
      console.log('doc',doc);
      let FormerDoc = docList.find((elem) => elem.id == doc.id);
      const docData = new FormData();
      let index = 0;
      let propName = '';
      for (let prop in FormerDoc) {
        propName = Object.keys(FormerDoc)[index];
        if (doc.hasOwnProperty(propName) && FormerDoc[prop] !== doc[prop]) {
          if (propName == 'link') {
            let linkString = doc.link.join('\\');
            docData.set(propName, linkString);
          } else if (propName == 'src' && FormerDoc.type == 'image'){
            docData.set('photo', doc.img);
          } else {
            docData.set(propName, doc[prop]);
          }
        } else {
          if (propName == 'link') {
            let linkString = FormerDoc.link.join('\\');
            docData.set(propName, linkString);
          } else if (propName == 'src' && FormerDoc.type == 'image'){
            docData.set('src', doc.img);
          }else {
            docData.set(propName, FormerDoc[prop]);
          }
        }
        index++;
      }
      if(docData.get('src')) {
        console.log('docData.ge src', docData.get('src'));
      }
      if(docData.get('photo')) {
        console.log('docData.ge photo', docData.get('photo'));
      }
      const config = {
        method: 'patch',
        url: `/user/walls/${state.wall.id}/elements/${doc.id}`,
        data: docData,
        headers: { 'Content-Type': 'multipart/form-data' },
      };
      API(config)
        .then((response) => {
          console.log('doc changé');
          console.log(response.data);
          store.dispatch(updateDoc(response.data));
          setTimeout(store.dispatch(emptyForm()), 500);
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
          console.log('doc effacé', response.data);
          store.dispatch(deleteDoc(state.elements.id));
          setTimeout(store.dispatch(emptyForm()), 500);
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
