import { combineReducers } from 'redux';

import wallsReducer from './walls';
import elementsReducer from './elements';
import authReducer from './auth';

const rootReducer = combineReducers({
  walls: wallsReducer,
  elements: elementsReducer,
  user: authReducer,
});

export default rootReducer;
