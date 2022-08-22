// == Import
import { Route, Routes } from 'react-router';
import { useNavigate } from 'react-router-dom';
import './styles.scss';

// == Import composant
import Events from '../Events';
import Home from '../Home';
import Welcome from '../Welcome';
import Inscription from '../Inscription';
import Todolists from '../Todolists';
import Todolist from '../Todolist';
import Members from '../Members';
import axios from 'axios';
import { useEffect, useState } from 'react';


// == Composant
const FamilyDeck = () => {

	// State
  const navigate = useNavigate();
	const [ userName, setUserName ] = useState('');
  const [ firstname, setFirstname ] = useState('');
	const [ password, setPassword ] = useState('');
  const [ token, setToken ] = useState('');
  const [ loggedIn, setLoggedIn ] = useState(false);

	// TEST CONNEXION

	const register = async () => {
		await axios.post('http://family-deck-back.herokuapp.com/api/user/register', {
			familyName: 'Simpson',
			lastname: 'Simpson',
			firstname: 'Homer',
			roleId: 1,
			email: 'homer@free.fr',
			confirmEmail: 'homer@free.fr',
			password: 'donut',
			confirmPassword: 'donut',

		}).then(response => {
	
			setToken(response.data.token);
		})
		// Cas d'erreur
			.catch(console.error);

		// await axios({
		// 	method: 'POST',
		// 	url: 'http://family-deck-back.herokuapp.com/api/user/auth',
		// 	responseType: 'json',
		// })
		// 	// Cas de succes
		// 	.then(response => {
		// 		// setCategories(response.data);
		// 		console.log(response);
		// 	})
		// 	// Cas d'erreur
		// 	.catch(console.error);
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

  const loginSubmit = (event) => {
    event.preventDefault();
    login();
    console.log("bien joué!");
  };

	useEffect(() => {
		// login();
    console.log(userName);
    console.log(password);
    console.log(firstname);

    console.log(token);
    // if ( loggedIn ) {
    //   navigate('/home');
    // }
	}, [token]);

	return (
		<div className="familyDeck">

			<Routes>
				<Route path="/" element={ <Welcome /> } />

				<Route path="/login" element={ <Welcome login={ 'login' } userName={ userName} setUserName={ setUserName } password={password} setPassword={ setPassword } loginSubmit={ loginSubmit } /> } />
				
        <Route path="/home" element={ <Home firstname={ firstname } /> } />
				<Route path="/members" element={ <Members /> } />
				<Route path="/member" element={ <Members member={ 'new' } /> } />
				<Route path="/member/:id" element={ <Members member={ 'memberId' }/> } />
				<Route path="/events" element={ <Events /> } />
				<Route path="/event/:id" element={ <Events event={ 'event' } /> } />
				<Route path="/inscription" element={ <Inscription /> } />
				<Route path="/todolists" element={ <Todolists /> } />
				<Route path="/todolist/5" element={ <Todolist /> } />

			</Routes>	

		</div>
	);
};

// == Export
export default FamilyDeck;
