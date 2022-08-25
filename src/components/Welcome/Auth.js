// == Import
import './styles.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { setUserName, setPassword, loginUser } from '../../actions/user';


// == Composant d'authentification
const Auth = () => {

	const dispatch = useDispatch();

	const { userName, password, loggedIn } = useSelector(state => state.user);

	// Fonction d'enregistrement des valeurs des inputs
	const inputValue = (event) => {

		if (event.target.name === 'userName') {
			dispatch(setUserName(event.target.value));

		} else {
			dispatch(setPassword(event.target.value));
		}
	}; 

	const loginSubmit = (event) => {
		event.preventDefault();
		dispatch(loginUser());
	};

	return (
		<form className="auth" onSubmit={ loginSubmit }>
			<input type="text" id="login" name="userName" placeholder="Login" value={ userName } onChange={ inputValue } />
			<input type="password" id="user_password" name="password" placeholder="Password" value={ password } onChange={ inputValue }/>

			<button type='submit'>Je me connecte</button>

			<Link to='/inscription'>
				<p>Pas de compte ? <span>je m'inscris!</span></p>
			</Link>
       
		</form>
	);
};

// == Export
export default Auth;

// Auth.propTypes = {
// 	setUserName: PropTypes.func,
// 	setPassword: PropTypes.func,
// 	loginSubmit: PropTypes.func,
// };
