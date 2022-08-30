export const GET_MEMBERS = 'GET_MEMBERS';
export const SET_MEMBERS = 'SET_MEMBERS';


export const setMembers = ({ allMemberAndRoles, famille_id, nom}) => ({
	type: SET_MEMBERS,
  members: allMemberAndRoles,
  familyName: nom,
  familyId: famille_id,
});

export const getMembers = () => ({
	type: GET_MEMBERS,
});
