export const SET_MEMBER = 'SET_MEMBER';
export const SET_INPUT_MEMBER = 'SET_INPUT_MEMBER';
export const SUBMIT_ADD_MEMBER = 'SUBMIT_ADD_MEMBER';


export const setMember = ( msg ) => ({
	type: SET_MEMBER,
  msg,
});


export const InputMember = ( name, value ) => ({
	type: SET_INPUT_MEMBER,
	name,
	value,
});

export const submitAddMember = () => ({
	type: SUBMIT_ADD_MEMBER,
});
