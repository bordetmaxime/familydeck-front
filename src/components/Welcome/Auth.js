// == Import
import './styles.scss';
import { Link } from 'react-router-dom';

// == Composant
const Auth = ({ userName, setUserName, password, setPassword, loginSubmit }) => {

	// Fonction d'enregistrement des valeurs des inputs
	const inputValue = (event) => {

		if (event.target.name === 'userName') {
      setUserName(event.target.value);

		} else {
      setPassword(event.target.value);
		}
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
