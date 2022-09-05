import { combineReducers } from 'redux';


import userReducer from './user';
import inscriptionReducer from './inscription';
import familyReducer from './family';
import memberReducer from './member';
import todolistReducer from './todolist';
import roleReducer from './role';

const rootReducer = combineReducers({
	user: userReducer,
	inscription: inscriptionReducer,
	family: familyReducer,
	member: memberReducer,
	todolist: todolistReducer,
	role: roleReducer,
});

export default rootReducer;
