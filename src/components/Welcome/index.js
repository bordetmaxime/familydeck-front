// == Import
import './styles.scss';
import PropTypes from 'prop-types';

// == Import composants
import Content from './content';
import Header from './Header';
import Start from './Start';
import Auth from './Auth';
import Message from './Message';

// == Composant structure de la page Welcome

const Welcome = ({ login, userName, setUserName, password, setPassword, loginSubmit, inscriptSucces, errLogin }) => {


	return (
    
		<div className="welcome">
			<Header userName={ userName } />
			<Content />
			{ inscriptSucces ? <Message inscriptSucces={ inscriptSucces } /> : errLogin ? <Message errLogin={ errLogin } /> : ''}
  

			{login ? <Auth userName={ userName } setUserName={ setUserName } password={ password } setPassword={ setPassword } loginSubmit={ loginSubmit } inscriptSucces={ inscriptSucces } /> : <Start /> }

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
