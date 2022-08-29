import axios from 'axios';
import { getMembers } from '../actions/family';
import { setMember, SUBMIT_ADD_MEMBER } from '../actions/member';


const memberMiddleware = (store) => (next) => async (action) => { 

	switch (action.type) { 

		case SUBMIT_ADD_MEMBER: {
			const { lastname, roleId, datebirth, username, password, confirmPassword, size, topsize, bottomsize, shoesize, school, hobbies } = store.getState().member;
			const { familyId } = store.getState().user.family;
			const { token } = store.getState().user;

			try {
				const { data } = await axios.post('https://family-deck-back.herokuapp.com/api/member', {
					familyId,
					lastname,
					roleId,
					datebirth,
					username,
					password,
					confirmPassword,
					topsize,
					bottomsize,
					shoesize,
					size,
					school,
					hobbies,
				},{
					headers: {
						Authorization: `Bearer ${ token }`,
					},
				});
				store.dispatch(setMember(data.msg));
        store.dispatch(getMembers());
				console.log("MEMBER MIDDLEWARE====>", data);
      
				break;
			} catch (error) {
				console.error(error);
				// setErrInscr(error.response.data.msg);
				break;
			}
		}
		default: 
			next(action); 
	} 
}; 

export default memberMiddleware;
