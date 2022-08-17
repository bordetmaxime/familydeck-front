// == Import
import familyDeckLogo from '../../assets/favicon.ico';
import PropTypes from 'prop-types';
import './styles.scss';

// == Import Icon
import { RiCalendarEventFill } from '@react-icons/all-files/ri/RiCalendarEventFill';

// == Composant
const Header = ({ app }) => {
	return (
		<div className="header">
			<img src={ familyDeckLogo } alt="logo family deck" />
			<div className='header__hello'>
				<h1>Bonjour <span>Header</span></h1>
			</div>
			{(app === 'events' ? <div className='header__appLogo'><RiCalendarEventFill /></div> : <div></div> )}

		</div>
	);
};

// == Export
export default Header;

Header.propTypes = {
	app: PropTypes.string,
};
