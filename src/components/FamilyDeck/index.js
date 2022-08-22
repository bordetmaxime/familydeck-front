// == Import
import { Route, Routes } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.scss';

// == Import composant
import Events from '../Events';
import Home from '../Home';
import Welcome from '../Welcome';
import Inscription from '../Inscription';
import Todolists from '../Todolists';
import Todolist from '../Todolist';
import Members from '../Members';


// == Composant
const FamilyDeck = () => {

	// State USER
	const navigate = useNavigate();
	const [ familyName, setFamilyName ] = useState('');
	const [ userName, setUserName ] = useState('');
	const [ lastname, setLastName ] = useState('');
	const [ firstname, setFirstname ] = useState('');
	const [ roleId, setRoleId ] = useState('');
	const [ dateBirth, setDateBirth ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ confirmEmail, setconfirmEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ confirmPassword, setConfirmPassword ] = useState('');
	const [ token, setToken ] = useState('');
	const [ loggedIn, setLoggedIn ] = useState(false);
	const [ createMsg, setCreateMsg ] = useState('');


	// Enregistrement d'un utilisateur 

	const inscriptionSubmit = (event) => {
		event.preventDefault();
		register();
	};

	const register = async () => {
		await axios.post('http://family-deck-back.herokuapp.com/api/user/register', {
			familyName,
			lastname,
			firstname,
			roleId,
			dateBirth,
			email,
			confirmEmail,
			password,
			confirmPassword,

		}).then(response => {

			setCreateMsg(response.data.msg);
			setPassword('');
			navigate('/login');
		})
		// Cas d'erreur
			.catch(console.error);

	};

	// Connexion d'un utilisateur

	const loginSubmit = (event) => {
		event.preventDefault();
		login();
	};

	const login = async () => {
		await axios.post('http://family-deck-back.herokuapp.com/api/user/auth', {
			userName,
			password,
		}).then(response => {
			console.log(response.data.member.firstname);
			setToken(response.data.token.token);
			setFirstname(response.data.member.firstname);
			setLoggedIn(true);
			navigate('/home');
		})
		// Cas d'erreur
			.catch(console.error);
	};

	// USE EFFECT

	useEffect(() => {
		console.log(userName);
		console.log(password);
		console.log(firstname);
		console.log(token);
	}, [ token ]);
  

	return (
		<div className="familyDeck">

			<Routes>
				<Route path="/" element={ <Welcome /> } />

				<Route path="/login" element={ 
					<Welcome 
						login={ 'login' } 
						userName={ userName } 
						setUserName={ setUserName } 
						password={ password } 
						setPassword={ setPassword } 
						loginSubmit={ loginSubmit } 
						createMsg={ createMsg }
					/> } />
				
				<Route path="/home" element={ <Home firstname={ firstname } /> } />
				<Route path="/members" element={ <Members /> } />
				<Route path="/member" element={ <Members member={ 'new' } /> } />
				<Route path="/member/:id" element={ <Members member={ 'memberId' }/> } />
				<Route path="/events" element={ <Events /> } />
				<Route path="/event/:id" element={ <Events event={ 'event' } /> } />
				<Route path="/inscription" element={
					<Inscription 
						familyName={ familyName } 
						setFamilyName={ setFamilyName } 
						lastname={ lastname } 
						setLastName={ setLastName } 
						firstname={ firstname } 
						setFirstname={ setFirstname }  
						roleId={ roleId } 
						setRoleId= { setRoleId }
						dateBirth={ dateBirth } 
						setDateBirth={ setDateBirth }
						email={ email } 
						setEmail={ setEmail }
						confirmEmail={ confirmEmail } 
						setconfirmEmail={ setconfirmEmail }
						password={ password } 
						setPassword={ setPassword }
						confirmPassword={ confirmPassword } 
						setConfirmPassword={ setConfirmPassword }
						inscriptionSubmit={ inscriptionSubmit }
					/> } />
				<Route path="/todolists" element={ <Todolists /> } />
				<Route path="/todolist/5" element={ <Todolist /> } />

			</Routes>	

		</div>
	);
};

// == Export
export default FamilyDeck;
