// == Import
import { Route, Routes } from 'react-router';
import Events from '../Events';
import Home from '../Home';
import Welcome from '../Welcome';
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
			</Routes>	
		</div>
	);
};

// == Export
export default FamilyDeck;
