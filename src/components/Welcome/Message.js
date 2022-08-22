// == Import
import PropTypes from 'prop-types';
import './styles.scss';

// == Composant
const Message = ({ createMsg }) => {
	return (
		<div className="message">
			<h2>{createMsg}</h2>
		</div>
	);
};

// == Export
export default Message;

Message.propTypes = {
	createMsg: PropTypes.string,
};
