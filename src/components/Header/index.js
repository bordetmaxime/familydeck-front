// == Import
import familyDeckLogo from '../../assets/favicon.ico';
import PropTypes from 'prop-types';
import './styles.scss';

// == Import Icon
import { BiLogOutCircle } from '@react-icons/all-files/bi/BiLogOutCircle';

// == Composant Header de l'app
const Header = ({ firstname, logout }) => {


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
