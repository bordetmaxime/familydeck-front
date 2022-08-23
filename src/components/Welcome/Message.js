// == Import
import PropTypes from 'prop-types';
import './styles.scss';

// == Composant de message de réussite de création de compte
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
