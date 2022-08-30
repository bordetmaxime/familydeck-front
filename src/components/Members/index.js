// == Imports
import './styles.scss';
import PropTypes from 'prop-types';


// == Imports composants
import Header from '../Header';
import Nav from '../Nav';
import Content from './content';
import AddMember from './AddMember';
import Member from './Member';
import FormMember from './FormMember';
import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';

// == Composant structure de la page Membres
const Members = ({ member }) => {

  const memberId = useParams();
  const id = Object.keys(memberId).length;
  // console.log('USEPARAMS===>', Object.keys(memberId).length);
  // console.log('USEPARAMS===>', memberId);
  const path = useLocation();
  const location = path.pathname;
  // console.log(location);

	return (
		<div className="members">
			<Header />
			{ location === '/member/:id/modify' ? <FormMember /> : id > 0 ? <Member id={ memberId.id } /> : <Content />}
			{id === 0 ? <AddMember /> : '' }
			<Nav />
		</div>
	);
};

// == Export
export default Members;

Members.propTypes = {
	member: PropTypes.string,
	// firstname: PropTypes.string.isRequired,
	// logout: PropTypes.func.isRequired,
};
