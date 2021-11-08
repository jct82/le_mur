import { combineReducers } from 'redux';

import wallsReducer from './walls';
import wallReducer from './wall';
import elementsReducer from './elements';
import authReducer from './auth';
import textEditReducer from './textEdit'

const rootReducer = combineReducers({
  walls: wallsReducer,
  wall: wallReducer,
  elements: elementsReducer,
  user: authReducer,
  textEdit: textEditReducer,
});

export default rootReducer;
