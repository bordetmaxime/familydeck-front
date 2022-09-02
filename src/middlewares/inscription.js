import axios from 'axios';
import { setErrInscr, setInscription, SUBMIT_INSCR } from '../actions/inscription';


const inscriptionMiddleware = (store) => (next) => async (action) => { 

	switch (action.type) { 

		case SUBMIT_INSCR: {
			const { familyName, lastname, firstname, roleId, dateBirth, email,confirmEmail, password, confirmPassword } = store.getState().inscription;

			try {
				const { data } = await axios.post('https://family-deck-back.herokuapp.com/api/user/register', {
					familyName,
					lastname,
					firstname,
					roleId,
					dateBirth,
					email,
					confirmEmail,
					password,
					confirmPassword,
      
				});
				store.dispatch(setInscription(data.msg));
				console.log(data.msg);
      
				break;
			} catch (error) {
				console.error(error);
        console.log(error.response.data.msg);
				store.dispatch(setErrInscr(error.response.data.msg));
				break;
			}
		}
		default: 
			next(action); 
	} 
}; 

export default inscriptionMiddleware;

