import { CHILD_SELECTED, SET_CHILDS_MEMBERS, SET_MEMBERS } from '../actions/family';

export const initialState = {
	members: [],
	childMembers: [],
	familyName: '',
	familyId: '',
	childSelectedValue: '',
  childSelectedName: '',
};

const reducer = (state = initialState, action = {}) => {

	switch (action.type) {

		case SET_MEMBERS:
			return {
				...state,
				familyName: action.familyName,
				familyId: action.familyId,
				members: action.members,
			};
    
		case SET_CHILDS_MEMBERS:
			return {
				...state,
				childMembers: action.childs,
			};

		case CHILD_SELECTED:
			return {
				...state,
				childSelectedValue: action.value,
        childSelectedName: action.name,
			};
    
		default:
			return state;
	}
};

export default reducer;
