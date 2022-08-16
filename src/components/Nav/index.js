// == Import
import { NavLink } from 'react-router-dom';
import './styles.scss';

// == Composant
const Nav = () => {
	return (
		<div className="nav">
			<NavLink to="/todolists" >ToDoList</NavLink>
      <NavLink to="/home" >Home</NavLink>
      <NavLink to="/events" >Events</NavLink>
		</div>
	);
};

// == Export
export default Nav;
