// == Imports
import './styles.scss';
import PropTypes from 'prop-types';


// == Imports composents
import EventsList from './EventsList';
import Event from './Event';
import ChildsSelect from '../ChildsSelect';
import Header from '../Header';
import Nav from '../Nav';

// == Composant
const Events = ({ event }) => {
	return (
		<div className="events">
			<Header app={ 'events' } />
			<ChildsSelect />
			{ event ? <Event /> : <EventsList />}
			
			<Nav />
		</div>
	);
};

// == Export
export default Events;

Header.propTypes = {
	app: PropTypes.string,
};
