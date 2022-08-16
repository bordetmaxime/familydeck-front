// == Import
import { Route, Routes } from 'react-router';
import Home from '../Home';
import Welcome from '../Welcome';
import reactLogo from './react-logo.svg';
import './styles.css';

// == Composant
const FamilyDeck = () => {
	return (
		<div className="familyDeck">
      <Routes>
        <Route path="/" element={ <Welcome /> } />
        <Route path="/home" element={ <Home /> } />
      </Routes>	
		</div>
	);
};

// == Export
export default FamilyDeck;
