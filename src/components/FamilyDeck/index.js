// == Import
import { Route, Routes } from 'react-router';
import Events from '../Events';
import Home from '../Home';
import Welcome from '../Welcome';
import Inscription from '../Inscription';
import Todolists from '../Todolists';
import Todolist from '../Todolist';
import './styles.scss';


// == Composant
const FamilyDeck = () => {
	return (
		<div className="familyDeck">

			<Routes>
				<Route path="/" element={ <Welcome /> } />
				<Route path="/home" element={ <Home /> } />
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
