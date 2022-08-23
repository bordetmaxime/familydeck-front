// == Import
import './styles.scss';
import PropTypes from 'prop-types';

// == Import icones
import { IoMdAddCircle } from 'react-icons/io';

// == Import composants
import Header from '../Header';
import AllTodolists from './alltodolist';
import Nav from '../Nav';


// == Composant
const Todolists= ({ firstname }) => {
	return (
		<div className="todolist">
			<Header firstname={ firstname } />
  

			<div className="form_div">
				<form action="/" method="post" >
 
					<div id="add_card_todo">
						<input type="text" id="add_card" name="add_card" placeholder="Nom de la liste"/>
						<IoMdAddCircle className="icon"/>
					</div>
				</form>
			</div>


			<AllTodolists />
			<Nav/>
		</div>

	);
};

// == Export
export default Todolists;

Todolists.propTypes = {
	firstname: PropTypes.string.isRequired,
};
