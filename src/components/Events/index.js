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
const Events = ({ event, form }) => {

	return (
		<div className="events">
			<Header />
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
	// logout: PropTypes.func.isRequired,
	// firstname: PropTypes.string.isRequired,
};
