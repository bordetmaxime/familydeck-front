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
import { useParams } from 'react-router-dom';

// == Composant structure de la page Membres
const Members = ({ member }) => {

  const memberIndex = useParams();
  const index = Object.keys(memberIndex).length;
  console.log('USEPARAMS===>', Object.keys(memberIndex).length);
  console.log('USEPARAMS===>', memberIndex);

	return (
		<div className="members">
			<Header />
			{member === 'new' ? <Member /> : index > 0 ? <Member index={ memberIndex.index } /> : member === 'modify' ? <FormMember /> : <Content />}
			<AddMember />
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
