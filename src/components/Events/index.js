// == Imports
import './styles.scss';
import PropTypes from 'prop-types';


// == Imports composents
import EventsList from './EventsList';
import Event from './Event';
import ChildsSelect from '../ChildsSelect';
import Header from '../Header';
import Nav from '../Nav';
import AddEvent from './AddEvent';

// == Composant Evenements
const Events = ({ event }) => {
	return (
		<div className="events">
			<Header app={ 'events' } />
			<ChildsSelect />
			{ event ? <Event /> : <EventsList />}
			<AddEvent />
			<Nav />
		</div>
	);
};

// == Export
export default Events;

Events.propTypes = {
	event: PropTypes.string,
};
