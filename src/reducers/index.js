import { combineReducers } from 'redux';


import userReducer from './user';
import inscriptionReducer from './inscription';

const rootReducer = combineReducers({
	user: userReducer,
	inscription: inscriptionReducer,
});

export default rootReducer;
