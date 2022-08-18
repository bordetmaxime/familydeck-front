// == Import
import { Route, Routes } from 'react-router';
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

// State

	return (
		<div className="familyDeck">

			<Routes>
				<Route path="/" element={ <Welcome /> } />
        <Route path="/login" element={ <Welcome login={'login'} /> } />
				<Route path="/home" element={ <Home /> } />
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
