// == Import
import { Route, Routes } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../actions/user';
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
import NotFound from '../NotFound';
import NotAutorized from '../NotFound/NotAutorized';


// == Composant principal de l'app
const FamilyDeck = () => {

	// Hook React
	const navigate = useNavigate();
	const dispatch = useDispatch();

	// State USER Inscription
	const loggedIn = useSelector((state) => state.user.loggedIn);
	const firstname = useSelector((state) => state.user.firstname);
	const { route } = useSelector(state => state.user);
	console.log(route);

	// const [ familyName, setFamilyName ] = useState('');
	// const [ userName, setUserName ] = useState('');
	// const [ lastname, setLastName ] = useState('');
	// const [ firstname, setFirstname ] = useState('');
	// const [ roleId, setRoleId ] = useState('');
	// const [ dateBirth, setDateBirth ] = useState('');
	// const [ email, setEmail ] = useState('');
	// const [ confirmEmail, setconfirmEmail ] = useState('');
	// const [ password, setPassword ] = useState('');
	// const [ confirmPassword, setConfirmPassword ] = useState('');
	// const [ token, setToken ] = useState('');
	// const [ loggedIn, setLoggedIn ] = useState(false);

	// State Messages
	const [ inscriptSucces, setInscriptSucces ] = useState('');
	const [ errLogin, setErrLogin ] = useState('');
	const [ errInscr, setErrInscr ] = useState('');

	// State Member
	const [ infosMember, setInfosMember ] = useState([]);

	// State family
	const [ infosFamily, setInfosFamily ] = useState([]);
  

	// Enregistrement d'un utilisateur 

	const inscriptionSubmit = (event) => {
		event.preventDefault();
		register();
	};

	// const register = async () => {
	// 	await axios.post('https://family-deck-back.herokuapp.com/api/user/register', {
	// 		familyName,
	// 		lastname,
	// 		firstname,
	// 		roleId,
	// 		dateBirth,
	// 		email,
	// 		confirmEmail,
	// 		password,
	// 		confirmPassword,

	// 	}).then(response => {

	// 		setInscriptSucces(response.data.msg);
	// 		setPassword('');
	// 		navigate('/login');

	// 	})
	// 	// Cas d'erreur
	// 		.catch(error => {
	// 			console.error(error);
	// 			console.log(error.response.data.msg);
	// 			setErrInscr(error.response.data.msg);
	// 		});
	// };


	const login = async () => {
		await axios.post('https://family-deck-back.herokuapp.com/api/user/auth', {
			userName,
			password,

		}).then(response => {

			setToken(response.data.token.token);
			setFirstname(response.data.member.firstname);
			setLoggedIn(true);
			setPassword('');
			setErrLogin('');
			setErrInscr('');
			setInscriptSucces('');
			navigate('/home');
		})
		// Cas d'erreur
			.catch(error => {
				console.error(error);
				setErrLogin(error.response.data.msg);
			});
      
	};

	// USE EFFECT

	useEffect( () => {
		console.log('dans le useEffect');
		navigate(route);
	},[ route ]);
  

	return (
		<div className="familyDeck">
			{/* Routes autorisées si le user est connecté (loggedIn === true) */}
			{
				loggedIn && 
          <Routes>
          	<Route path="/home" element={ <Home /> } />
          	<Route path="/members" element={ <Members /> } />
          	<Route path="/member" element={ <Members member={ 'new' } /> } />
          	<Route path="/member/:id/modify" element={ <Members member={ 'modify' } /> } />
          	<Route path="/member/:id" element={ <Members member={ 'memberId' } /> } />
          	<Route path="/events" element={ <Events /> } />
          	<Route path="/event/:id" element={ <Events event={ 'eventId' } /> } />
          	<Route path="/event/:id/modify" element={ <Events form={ 'form' } /> } />
          	<Route path="/todolists" element={ <Todolists /> } />
          	<Route path="/todolist/5" element={ <Todolist /> } />
          	<Route path="*" element={ <NotFound /> } />
          </Routes>
			}
			{/* Routes autorisées si le user n'est pas connecté (loggedIn === false) */}
			{
				!loggedIn && 
          <Routes>
          	<Route path="/" element={ <Welcome /> } />
          	<Route path="/login" element={ 
          		<Welcome 
          			login={ 'login' }
          			// userName={ userName }
          			// setUserName={ setUserName }
          			// password={ password }
          			// setPassword={ setPassword }
          			// loginSubmit={ loginSubmit }
          			// inscriptSucces={ inscriptSucces }
          			// errLogin={ errLogin }
          		/> } />
          	<Route path="/inscription" element={
          		<Inscription 
          			// familyName={ familyName } 
          			// setFamilyName={ setFamilyName } 
          			// lastname={ lastname } 
          			// setLastName={ setLastName } 
          			// firstname={ firstname } 
          			// setFirstname={ setFirstname }  
          			// roleId={ roleId } 
          			// setRoleId= { setRoleId }
          			// dateBirth={ dateBirth } 
          			// setDateBirth={ setDateBirth }
          			// email={ email } 
          			// setEmail={ setEmail }
          			// confirmEmail={ confirmEmail } 
          			// setconfirmEmail={ setconfirmEmail }
          			// password={ password } 
          			// setPassword={ setPassword }
          			// confirmPassword={ confirmPassword } 
          			// setConfirmPassword={ setConfirmPassword }
          			// inscriptionSubmit={ inscriptionSubmit }
          			// errInscr={ errInscr }
          		/> } />
          	<Route path="/home" element={ <NotAutorized /> } />
          	<Route path="/members" element={ <NotAutorized /> } />
          	<Route path="/member" element={ <NotAutorized /> } />
          	<Route path="/member/:id" element={ <NotAutorized /> } />
          	<Route path="/events" element={ <NotAutorized /> } />
          	<Route path="/event/:id" element={ <NotAutorized /> } />
          	<Route path="/todolists" element={ <NotAutorized /> } />
          	<Route path="/todolist/5" element={ <NotAutorized /> } />        
          	<Route path="*" element={ <NotFound /> } />
          </Routes>

			}

		</div>
	);
};

// == Export
export default FamilyDeck;
