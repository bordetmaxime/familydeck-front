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
import EventForm from './EventForm';

// == Composant Evenements
const Events = ({ event, firstname, logout, form }) => {

	return (
		<div className="events">
			<Header firstname={ firstname } logout={ logout } />
			<ChildsSelect />
			{ event ? <Event /> : form ? <EventForm /> : <EventsList />}
			{ event || form ? '' : <AddEvent /> }
			<Nav />
		</div>
	);
};

// == Export
export default Events;

Events.propTypes = {
	logout: PropTypes.func.isRequired,
	firstname: PropTypes.string.isRequired,
};
