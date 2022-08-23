// == Import
import './styles.scss';

// == Import des icons de la page home
import { FaUsersCog } from '@react-icons/all-files/fa/FaUsersCog';
import { GoChecklist } from '@react-icons/all-files/go/GoChecklist';
import { RiCalendarEventFill } from '@react-icons/all-files/ri/RiCalendarEventFill';
import { CgGirl } from '@react-icons/all-files/cg/CgGirl';
import { GoSettings } from '@react-icons/all-files/go/GoSettings';
import { Link } from 'react-router-dom';

// == Composant contenant les fonctionnalitées de la page Home
const Content = ({ childId, userId }) => {
	return (
		<div className="content">

			<Link to='/members' className='content__button'>
				<div className='content__icon'>
					<FaUsersCog />
				</div>
				<h3>Ma famille</h3>
			</Link>

			<Link to='/todolists' className='content__button'>
				<div className='content__icon'>
					<GoChecklist />
				</div>
				<h3>ToDoLists</h3>
			</Link>

			<Link to='/events' className='content__button'>
				<div className='content__icon'>
					<RiCalendarEventFill />
				</div>
				<h3>Evènements</h3>
			</Link>

			<Link to={ `/member/${ childId }` } className='content__button'>
				<div className='content__icon'>
					<CgGirl />
				</div>
				<h3>Infos Enfant</h3>
			</Link>

			<Link to={ `/member/${ userId }` } className='content__button'>
				<div className='content__icon'>
					<GoSettings />
				</div>
				<h3>Paramètres</h3>
			</Link>

		</div>
	);
};

// == Export
export default Content;
