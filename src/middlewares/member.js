import axios from 'axios';
import { getMembers } from '../actions/family';
import { GET_MEMBER, PATCH_MEMBER, savMember, setMember, setMemberModify, SUBMIT_ADD_MEMBER } from '../actions/member';


const memberMiddleware = (store) => (next) => async (action) => { 

	switch (action.type) { 

		case SUBMIT_ADD_MEMBER: {
			const { firstname, roleId, datebirth, username, password, confirmPassword, size, topsize, bottomsize, shoesize, school, hobbies } = store.getState().member;
			const { familyId } = store.getState().user.family;
			const { token } = store.getState().user;
      console.log('tupe of ROLEID===>',typeof(roleId));

			try {
				const { data } = await axios.post(`https://family-deck-back.herokuapp.com/api/family/${familyId}/members`, {
					firstname,
          username,
					roleId,
					datebirth,
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

    case GET_MEMBER: {
      const memberId = action.payload;
			const { token } = store.getState().user;
      const { familyId } = store.getState().family;
      console.log('MEMBERID dans middleware',memberId);
      console.log('FAMILYID====>', familyId);

			try {
				const { data } = await axios.get(`https://family-deck-back.herokuapp.com/api/family/${familyId}/member/${memberId}`,{
					headers: {
						Authorization: `Bearer ${ token }`,
					},
				});
				// store.dispatch(setMember(data.msg));
        // store.dispatch(getMembers());
				console.log("MEMBER MIDDLEWARE====>", data);
        store.dispatch(savMember(data));
      
				break;
			} catch (error) {
				console.error(error);
				// setErrInscr(error.response.data.msg);
				break;
			}
		}

    case PATCH_MEMBER: {
      const { firstname, email, datebirth, size, topsize, bottomsize, shoesize, school, hobbies, memberId } = store.getState().member;
			const { familyId } = store.getState().user.family;
			const { token } = store.getState().user;

			try {
				const { data } = await axios.patch(`https://family-deck-back.herokuapp.com/api/member/${memberId}`, {
					firstname,
          email,
					datebirth,
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
