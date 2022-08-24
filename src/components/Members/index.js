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

// == Composant structure de la page Membres
const Members = ({ member, firstname, logout }) => {

	return (
		<div className="members">
			<Header firstname={ firstname } logout={ logout } />
			{member === 'new' ? <Member /> : member === 'memberId' ? <Member id={ 1 } /> : member === 'modify' ? <FormMember /> : <Content />}
			{member ? '' : <AddMember />}
			<Nav />
		</div>
	);
};

// == Export
export default Members;

Members.propTypes = {
	member: PropTypes.string,
	firstname: PropTypes.string.isRequired,
	logout: PropTypes.func.isRequired,
};
