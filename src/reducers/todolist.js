import { SET_LISTS } from '../actions/todolist';

export const initialState = {
	lists: [],
};

const reducer = (state = initialState, action = {}) => {

	switch (action.type) {

		case SET_LISTS:
			return {
				...state,
				lists: action.data,
			};
    
		default:
			return state;
	}
};

export default reducer;
