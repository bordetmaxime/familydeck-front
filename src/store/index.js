import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';
import userMiddleware from '../middlewares/user';
import inscriptionMiddleware from '../middlewares/inscription';
import familyMiddleware from '../middlewares/family';
import memberMiddleware from '../middlewares/member';
import todolistMiddleware from '../middlewares/todolist';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const enhancers = composeEnhancers(
	applyMiddleware(
		userMiddleware,
		inscriptionMiddleware,
		familyMiddleware,
    memberMiddleware,
    todolistMiddleware
	)
);

const store = createStore(reducer, enhancers);

export default store;
