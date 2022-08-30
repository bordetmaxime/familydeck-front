// == Import
import { Route, Routes } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import AddMember from '../Members/AddMember';
import FormMember from '../Members/FormMember';
import { delRedirectInfo } from '../../actions/member';


// == Composant principal de l'app
const FamilyDeck = () => {

	// Hook React
	const navigate = useNavigate();
	const dispatch = useDispatch();

	// State USER Inscription
	const loggedIn = useSelector((state) => state.user.loggedIn);

	// State member
	const { memberId } = useSelector((state) => state.member);

	// State de redirection
	const { redirection } = useSelector(state => state.inscription);
	const { redirectMember } = useSelector(state => state.member);

	// USE EFFECT gerant les redirection apres inscription et login
	// useEffect( () => {
	// 	console.log('USEEFFECT REDIRECTION', redirection);
	// 	redirectMember ? navigate(redirectMember) : 
	// 		navigate('/');
	// },[ redirectMember ]);
  

	return (
		<div className="familyDeck">
			{/* Routes autorisées si le user est connecté (loggedIn === true) */}
			{
				loggedIn && 
          <Routes>
          	<Route path="/home" element={ <Home /> } />
          	<Route path="/members" element={ <Members /> } />
          	<Route path="/member/:id" element={ <Members /> } />
          	<Route path="/member/:id/modify" element={ <Members /> } />
          	<Route path="/FormMember" element={ <FormMember /> } />
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
          	<Route path="/login" element={ <Welcome login={ 'login' } /> } />
          	<Route path="/inscription" element={ <Inscription /> } />
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
