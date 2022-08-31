// == Import
import './styles.scss';
import PropTypes from 'prop-types';

// == Import composants
import ChildsSelect from '../ChildsSelect';
import EventsAlert from '../EventsAlert';
import Header from '../Header';
import Nav from '../Nav';
import Content from './content';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMembers } from '../../actions/family';


// == Composant structure de la page Home
const Home = ({ childId }) => {

  const dispatch = useDispatch();
  const members = useSelector(state => state.family.members);
  const { familyId } = useSelector(state => state.user.family);

  console.log('DANS HOME ===>',members);

  useEffect(() => {
    if(familyId) {
      dispatch(getMembers());
    }
  },[ familyId ]);
  
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
