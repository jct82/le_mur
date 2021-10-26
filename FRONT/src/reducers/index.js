import { combineReducers } from 'redux';

import wallsReducer from './walls';
import elementsReducer from './elements';

const rootReducer = combineReducers({
  walls: wallsReducer,
  elements: elementsReducer,
});

export default rootReducer;
