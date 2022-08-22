// == Import
import ChildsSelect from '../ChildsSelect';
import EventsAlert from '../EventsAlert';
import Header from '../Header';
import Nav from '../Nav';
import './styles.scss';
import Content from './content';

// == Composant
const Home = ({ childId, firstname }) => {

console.log('HOME====>', firstname);

	return (
		<div className="home">
			<Header firstname={ firstname } />
      <EventsAlert />
      <ChildsSelect />
      <Content childId={'3'} />
      <Nav />
		</div>
	);
};

// == Export
export default Home;
