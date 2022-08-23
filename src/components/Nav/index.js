// == Import
import { NavLink } from 'react-router-dom';
import './styles.scss';

// == Import Icones
import { FaHome } from '@react-icons/all-files/fa/FaHome';
import { RiCalendarEventFill } from '@react-icons/all-files/ri/RiCalendarEventFill';
import { GoChecklist } from '@react-icons/all-files/go/GoChecklist';

// == Composant barre de navigation
const Nav = () => {
  
	return (
		<div className="nav">

			<NavLink to="/events" >
				<RiCalendarEventFill className='nav__icon' />
			</NavLink>

			<NavLink to="/home" >
				<FaHome className='nav__icon'/>
			</NavLink>

			<NavLink to="/todolists" >
				<GoChecklist className='nav__icon'/>
			</NavLink>
		
		</div>
	);
};

// == Export
export default Nav;
