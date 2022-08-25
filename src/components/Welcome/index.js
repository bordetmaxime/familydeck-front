// == Import
import './styles.scss';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

// == Import composants
import Content from './content';
import Header from './Header';
import Start from './Start';
import Auth from './Auth';
import Message from './Message';

// == Composant structure de la page Welcome

const Welcome = ({ login, inscriptSucces }) => {

  const { errLogin } = useSelector(state => state.user);

	return (
    
		<div className="welcome">
			<Header />
			<Content />
			{ inscriptSucces ? <Message inscriptSucces={ inscriptSucces } /> : errLogin ? <Message errLogin={ errLogin } /> : ''}

			{login ? <Auth inscriptSucces={ inscriptSucces } /> : <Start /> }

		</div>
	);
};

// == Export
export default Welcome;

Welcome.propTypes = {
	login: PropTypes.string,
	userName: PropTypes.string,
	password: PropTypes.string,
	setUserName: PropTypes.func,
	setPassword: PropTypes.func,
	loginSubmit: PropTypes.func,
	inscriptSucces: PropTypes.string,
	errLogin: PropTypes.string,
};
