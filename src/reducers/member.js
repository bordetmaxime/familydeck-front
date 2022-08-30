import { DEL_REDIRECT_INFO, DEL_STATE_MEMBER, SAV_MEMBER, SET_INPUT_MEMBER, SET_MEMBER, SET_MEMBER_MODIFY } from '../actions/member';

export const initialState = {
	familyId: '',
	firstname: '',
	username: '',
	email: '',
	roleId: '',
	label: '',
	datebirth: '',
	password: '',
	confirmPassword: '',
	topsize: '',
	bottomsize: '',
	shoesize: '',
	size: '',
	school: '',
	hobbies: '',
	memberId: '',
	recupMember: false,
	// state de reidrection
	redirectMember: '',
	// redirectMemberInfos: '',
};

const reducer = (state = initialState, action = {}) => {

	switch (action.type) {

		case SET_MEMBER:
			return {
				...state,
				redirectMember: '/members',
			};

		case SET_INPUT_MEMBER:
			return {
				...state,
				[ action.name ]: action.value,
			};
			// Enregistrement des informations du membre consulté
		case SAV_MEMBER:
			return {
				...state,
				firstname: action.member_firstname,
				username: action.member_username,
				roleId: action.roleid,
				datebirth: action.birth,
				password: '',
				confirmPassword: '',
				topsize: action.top_size,
				bottomsize: action.bottom_size,
				shoesize: action.shoes_size,
				size: action.size,
				school: action.school,
				hobbies: action.hobbies,
				memberId: action.member_id,
				label: action.label,
			};
    
		case SET_MEMBER_MODIFY:
			return {
				...state,
				redirectMemberInfos: '/members',
			};

		case DEL_REDIRECT_INFO:
			return {
				...state,
				redirectMember: '',
			};

		case DEL_STATE_MEMBER:
			return {
				...state,
				firstname: '',
				username: '',
				email: '',
				roleId: '',
				label: '',
				datebirth: '',
				password: '',
				confirmPassword: '',
				topsize: '',
				bottomsize: '',
				shoesize: '',
				size: '',
				school: '',
				hobbies: '',
				memberId: '',
			};
    
		default:
			return state;
	}
};

export default reducer;
