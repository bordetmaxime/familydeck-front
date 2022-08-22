// == Import
import './styles.scss';
import PropTypes from 'prop-types';

// == Import composants
import Content from './content';
import Header from './Header';
import Start from './Start';
import Auth from './Auth';

// == Composant

const Welcome = ({ login, userName, setUserName, password, setPassword, loginSubmit, createMsg }) => {


	return (

    
		<div className="welcome">
			<Header userName={ userName } />
      { createMsg ? createMsg : ''}
			<Content />


			{login ? <Auth userName={ userName } setUserName={ setUserName } password={ password } setPassword={ setPassword } loginSubmit={ loginSubmit } createMsg={ createMsg } /> : <Start /> }
      

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
};
