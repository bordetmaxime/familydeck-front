// == Import
import './styles.scss';

// == Import icones
import { IoMdAddCircle } from 'react-icons/io';

// == Import composants
import Header from '../Header';
import AllTodolists from './alltodolist';
import Nav from '../Nav';
import { useDispatch, useSelector } from 'react-redux';
import { inputAddList, inputOnChange, postNewList } from '../../actions/todolist';


// == Composant
const Todolists= () => {

	const dispatch = useDispatch();

	const inputValue = useSelector(state => state.todolist.inputValue);

	const handleOnChange = (event) => {
		dispatch(inputOnChange(event.target.value));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(postNewList());
	};


	return (
		<div className="todolist">
			<Header />
  

			<div className="form_div">
				<form onSubmit={ handleSubmit }>
 
					<div id="add_card_todo">
						<input type="text" id="add_card" name="add_list" value={ inputValue } placeholder="Nouvelle liste" onChange={ handleOnChange }/>
						<button type='submit'><IoMdAddCircle className="icon"/></button>
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

