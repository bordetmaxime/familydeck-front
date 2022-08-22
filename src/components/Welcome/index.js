// == Import
import Content from './content';
import Header from './Header';
import Start from './Start';
import Auth from './Auth';
import './styles.scss';
import { useEffect } from 'react';

// == Composant

const Welcome = ({ login, userName, setUserName, password, setPassword, loginSubmit }) => {


	return (

    
		<div className="welcome">
			<Header userName={ userName } />
			<Content />


			{login ? <Auth userName={ userName} setUserName={ setUserName } password={password} setPassword={ setPassword } loginSubmit={ loginSubmit } /> : <Start /> }
      

		</div>
	);
};

// == Export
export default Welcome;
