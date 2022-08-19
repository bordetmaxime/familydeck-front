// == Import
import './styles.scss';
import { Link } from 'react-router-dom';

// == Composant
const Auth = () => {
	return (
		<div className="auth">
			<input type="text" id="login" name="user_login" placeholder="Login"/>
			<input type="password" id="user_password" name="user_password" placeholder="Password"/>

			<Link to='/home'>
				<button type='submit'>Je me connecte</button>
			</Link>

			<Link to='/inscription'>
				<p>Pas de compte ? <span>je m'inscris!</span></p>
			</Link>
       
		</div>
	);
};

// == Export
export default Auth;
