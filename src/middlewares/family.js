import axios from 'axios';
import { GET_MEMBERS, setMembers } from '../actions/family';


const familyMiddleware = (store) => (next) => async (action) => { 

	switch (action.type) { 

		case GET_MEMBERS: {
			const { token } = store.getState().user;
			const { familyId } = store.getState().user.family;

			try {
				const { data } = await axios.get(`https://family-deck-back.herokuapp.com/api/family/${ familyId }/members`, {
					headers: {
						Authorization: `Bearer ${ token }`,
					},
				});
				store.dispatch(setMembers(data));
				// console.log('data FAMILY middleware ===>',data);
				break;
        
			} catch (error) {
				console.error(error);
				console.log(error.response.data.msg);
				// store.dispatch(setErrLogin(error.response.data.msg));
				break;
			}
		}
		default: 
			next(action); 
	} 
}; 

export default familyMiddleware;