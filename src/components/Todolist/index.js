// == Import
import './styles.scss';
import PropTypes from 'prop-types';

// == Import icones
import { FaPen } from '@react-icons/all-files/fa/FaPen';
import { FaTrash } from '@react-icons/all-files/fa/FaTrash';
import { IoMdAddCircle } from 'react-icons/io';

// == Import composants
import Header from '../Header';
import Nav from '../Nav';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItems, inputAddItem, postNewItem } from '../../actions/todolist';


// == Composant vue d'une todolist
const Todolist= () => {

	const dispatch = useDispatch();

	const listId = useParams();
	const items = useSelector(state => state.todolist.items);
	const lists = useSelector(state => state.todolist.lists);
  const inputNewItem = useSelector(state => state.todolist.inputAddItem);

  const handleInputItem = (event) => {
		dispatch(inputAddItem(event.target.value));
	};

	const submitNewItem = (event) => {
		event.preventDefault();
		dispatch(postNewItem(listId.id));
	};

	// Récupération de la liste selectionné

	const list = lists.find(el => el.todolist_id == listId.id);

	useEffect(() => {
		dispatch(getItems(listId.id));
	},[]);

	return (

		<div className="todolist">
			<Header />
         
			<div className="card">
				<header className="header_todolist">
					<h2 className="title">{list.todolist_title}</h2>
					<FaPen className="icon"/>
					<FaTrash className="icon"/>
				</header>

				<form className="form_card" onSubmit={ submitNewItem }>
 
					<div id="add_card_div">
						<input type="text" id="add_card" name="add_card" value={ inputNewItem } placeholder="Nouvel élément" onChange={ handleInputItem }/>
						<button type='submit'><IoMdAddCircle className="icon"/></button>
					</div>
  
				</form>

				<main className="main_card">
					<ul>

						{items ? items.map(item => ( 
							<div key={ item.item_id } id={ item.item_id } className="item_card">
								<li><input type="checkbox" name={ item.item_title }></input>{item.item_title}</li> 
								{item.item_deadline ? <p>Avant le {item.item_deadline}</p> : ''}
							</div>
						)): ''}
						

						{/* <div className="item_card">
							<li><input type="checkbox" id="scales" name="scales"></input>Crayon</li>
							<p></p>
						</div>

						<div className="item_card">
							<li><input type="checkbox" id="scales" name="scales"></input>Gomme</li>
							<p></p>
						</div>

						<div className="item_card">
							<li><input type="checkbox" id="scales" name="scales"></input>Stylo</li>
							<p></p>
						</div> */}

					</ul>
				</main>

			</div>
			<Nav/>
      
		</div>
	);
};

// == Export
export default Todolist;

// Todolist.propTypes = {
// 	firstname: PropTypes.string.isRequired,
// };
