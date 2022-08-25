export const SET_INSCRIPTION = 'SET_INSCRIPTION';
export const SUBMIT_INSCR = 'SUBMIT_INSCR';
export const SET_ERR_INSCR = 'SET_ERR_INSCR';

export const setInscription = ({ }) => ({
	type: SET_INSCRIPTION,
	token: token.token,
	firstname: member.firstname,
});

export const submitInscr = () => ({
  type: SUBMIT_INSCR,
});

export const setErrInscr = () => ({
  type: SET_ERR_INSCR,
});
