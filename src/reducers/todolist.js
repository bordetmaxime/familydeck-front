import { RESET_ITEMS, SET_ITEMS, SET_LISTS, SET_NEW_LIST, SET_NEW_ITEM, INPUT_ADD_ITEM, INPUT_ON_CHANGE } from '../actions/todolist';

export const initialState = {
	lists: [],
	items: [],
	inputValue: '',
	newListMsg: '',
	inputAddItem: '',
	newItemMsg: '',
};

const reducer = (state = initialState, action = {}) => {

	switch (action.type) {

		case SET_LISTS:
			return {
				...state,
				lists: action.data,
			};
    
		case SET_ITEMS:
			return {
				...state,
				items: action.data,
			};

		case RESET_ITEMS:
			return {
				...state,
				items: [],
			};

		case INPUT_ON_CHANGE:
			return {
				...state,
				inputValue: action.value,
			};
    
		case SET_NEW_LIST:
			return {
				...state,
				newListMsg: action.msg,
				inputAddList: '',
			};

		case INPUT_ADD_ITEM:
			return {
				...state,
				inputAddItem: action.value,
			};
      
		case SET_NEW_ITEM:
			return {
				...state,
				newItemMsg: action.msg,
				inputAddItem: '',
			};

		default:
			return state;
	}
};

export default reducer;
