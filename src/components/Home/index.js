// == Import
import './styles.scss';
import PropTypes from 'prop-types';

// == Import composants
import ChildsSelect from '../ChildsSelect';
import EventsAlert from '../EventsAlert';
import Header from '../Header';
import Nav from '../Nav';
import Content from './content';


// == Composant structure de la page Home
const Home = ({ childId }) => {

  
	return (
		<div className="home">
			<Header />
			<EventsAlert />
			<ChildsSelect />
			<Content childId={ '3' } />
			<Nav />
		</div>
	);
};

// == Export
export default Home;

Home.propTypes = {
	childId: PropTypes.string,
};
