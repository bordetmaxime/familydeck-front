import axios from 'axios';
import { GET_ROLE, setRole } from '../actions/role';


const roleMiddleware = (store) => (next) => async (action) => { 

	switch (action.type) { 

		case GET_ROLE: {
			const token = store.getState().user.token;

			try {
				const { data } = await axios.get('https://family-deck-back.herokuapp.com/api/role', {
					headers: {
						Authorization: `Bearer ${ token }`,
					},
				});
				store.dispatch(setRole(data));
				// console.log('ROLES ====>',data);
      
				break;
			} catch (error) {
				console.error(error);
				console.log(error.response.data.msg);
				break;
			}
		}
		default: 
			next(action); 
	} 
}; 

export default roleMiddleware;

