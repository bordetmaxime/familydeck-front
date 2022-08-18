// == Imports
import './styles.scss';
import PropTypes from 'prop-types';


// == Imports composents
import Header from '../Header';
import Nav from '../Nav';
import Content from './content';
import AddMember from './AddMember';
import Member from './Member';

// == Composant
const Members = ({ member }) => {
	return (
		<div className="members">
			<Header app={ 'members' } />
			{member === 'new' ? <Member /> : member === 'memberId' ? <Member id={ 1 } /> : <Content />}
			{member ? '' : <AddMember />}
			<Nav />
		</div>
	);
};

// == Export
export default Members;

Members.propTypes = {
	member: PropTypes.string,
};
