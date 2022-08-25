// == Import
import familyDeckLogo from '../../assets/favicon.ico';
import PropTypes from 'prop-types';
import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUserName, setToken, setLoggedIn } from '../../actions/user';

// == Import Icon
import { BiLogOutCircle } from '@react-icons/all-files/bi/BiLogOutCircle';

// == Composant Header de l'app
const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { firstname } = useSelector(state => state.user);

  const logout = () => {
		dispatch(setToken(''));
		dispatch(setUserName(''));
		dispatch(setLoggedIn(false));
	};

	return (
		<div className="header">
			<img src={ familyDeckLogo } alt="logo family deck" />
			<div className='header__hello'>
				<h1>Bonjour <span>{firstname}</span></h1>
			</div>
			<div className='logout-button' onClick={ logout } role="button" tabIndex={ 0 } >
				<BiLogOutCircle />
			</div>

		</div>
	);
};

// == Export
export default Header;

Header.propTypes = {
	app: PropTypes.string,
	firstname: PropTypes.string.isRequired,
	logout: PropTypes.func,
};
