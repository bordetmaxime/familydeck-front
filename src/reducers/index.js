import { combineReducers } from 'redux';


import userReducer from './user';
import inscriptionReducer from './inscription';
import familyReducer from './family';
import memberReducer from './member';

const rootReducer = combineReducers({
	user: userReducer,
	inscription: inscriptionReducer,
  family: familyReducer,
  member: memberReducer,
});

export default rootReducer;
