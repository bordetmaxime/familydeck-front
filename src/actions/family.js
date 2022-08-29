export const GET_MEMBERS = 'GET_MEMBERS';
export const SET_MEMBERS = 'SET_MEMBERS';


export const setMembers = ( data ) => ({
	type: SET_MEMBERS,
  members: data,
});

export const getMembers = () => ({
	type: GET_MEMBERS,
});
