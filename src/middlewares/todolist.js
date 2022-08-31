import axios from 'axios';
import { GET_LISTS, setLists } from '../actions/todolist';


const todolistMiddleware = (store) => (next) => async (action) => { 

	switch (action.type) { 

		case GET_LISTS: {
			const { token } = store.getState().user;
      const { familyId } = store.getState().user.family;

			try {
				const { data } = await axios.get(`https://family-deck-back.herokuapp.com/api/todolist/family/${familyId}`, {
					headers: {
            Authorization: `Bearer ${token}`,
          },
				});
				store.dispatch(setLists(data));
        console.log('data TODOLIST middleware ===>',data);
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

export default todolistMiddleware;
