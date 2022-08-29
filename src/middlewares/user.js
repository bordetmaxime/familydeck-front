import axios from 'axios';
import { LOGIN_USER, setErrLogin, setlogin } from '../actions/user';


const userMiddleware = (store) => (next) => async (action) => { 

	switch (action.type) { 

		case LOGIN_USER: {
			const { userName, password } = store.getState().user;

			try {
				const { data } = await axios.post('https://family-deck-back.herokuapp.com/api/user/auth', {
					userName,
					password,
				});
				store.dispatch(setlogin(data));
        console.log("DATA USER===> ",data);
				break;
        
			} catch (error) {
				console.error(error);
				console.log(error.response.data.msg);
				store.dispatch(setErrLogin(error.response.data.msg));
				break;
			}
		}
		default: 
			next(action); 
	} 
}; 

export default userMiddleware;
