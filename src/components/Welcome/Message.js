// == Import
import { useSelector } from 'react-redux';
import './styles.scss';

// == Composant de message de réussite de création de compte
const Message = () => {

	const { errLogin } = useSelector(state => state.user);
	const { inscriptMsgSucces, inscriptionMsgErr } = useSelector(state => state.inscription);

	return (
		<div className="message">
			{
				errLogin ? <h2 className='message__error'>{errLogin}</h2> :
					inscriptionMsgErr ? <h2 className='message__error'>{inscriptionMsgErr}</h2> :
						<h2 className='message__succes'>{inscriptMsgSucces}</h2>
			}
		</div>
	);
};

// == Export
export default Message;

