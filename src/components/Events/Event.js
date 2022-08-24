// == Imports
import './styles.scss';

// == Imports icones
import { FaPen } from '@react-icons/all-files/fa/FaPen';
import { FaTrash } from '@react-icons/all-files/fa/FaTrash';
import { Link } from 'react-router-dom';

// == Composant pour la vue des informations d'un evenement
const Event = () => {
	return (
		<div className="event">

			<div className='event__infos'>
				<div className='event__item'>
					<h4 className='event__title4'>Date</h4>
					<p id='event-date' className='event__data'>Date de l'evenement</p>
				</div>

				<div className='event__item'>
					<h4 className='event__title4'>Titre</h4>
					<p id='event-title' className='event__data'>Titre de l'evenement</p>
				</div>

				<div className='event__item'>
					<h4 className='event__title4'>Catégorie de l'évènment</h4>
					<p id='event-cat' className='event__data'>Catégorie de l'évènment</p>
				</div>

				<div className='event__item'>
					<h4 className='event__title4'>Lieux</h4>
					<p id='event-place' className='event__data'>Lieux de l'évènement</p>
				</div>

				<div className='event__item'>
					<h4 className='event__title4'>Parent(s) concerné(s)</h4>
					<p id='event-parent' className='event__data'>Role du parent concerné</p>
				</div>

				<div className='event__item'>
					<h4 className='event__title4'>Information(s) complémentaire(s)</h4>
					<p id='event-infos' className='event__data'>Informations complémentaire de l'évènment</p>
				</div>

				<div className='event__buttons'>

					<Link to='/event/:id/modify'>
						<FaPen />
					</Link>

					<FaTrash />
				</div>

			</div>
     
		</div>
	);
};

// == Export
export default Event;
