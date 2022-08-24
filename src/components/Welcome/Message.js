// == Import
import PropTypes from 'prop-types';
import './styles.scss';

// == Composant de message de réussite de création de compte
const Message = ({ inscriptSucces, errLogin, errInscr }) => {
	return (
		<div className="message">
			{
				errLogin ? <h2 className='message__error'>{errLogin}</h2> :
        errInscr ? <h2 className='message__error'>{errInscr}</h2> :
					<h2 className='message__succes'>{inscriptSucces}</h2>
			}
		</div>
	);
};

// == Export
export default Message;

Message.propTypes = {
	inscriptSucces: PropTypes.string,
  errLogin: PropTypes.string,
  errInscr: PropTypes.string,
};
