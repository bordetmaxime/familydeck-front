// == Import
import './styles.scss';

// == Import icones
import { FaPen } from '@react-icons/all-files/fa/FaPen';
import { FaTrash } from '@react-icons/all-files/fa/FaTrash';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { inputOnChange, resetItems } from '../../actions/todolist';
import Popup from 'reactjs-popup';


// == Composant visuel de toutes les todolists
const AllTodolists = () => {

	const dispatch = useDispatch();

	const lists = useSelector(state => state.todolist.lists);
  const inputValue = useSelector(state => state.todolist.inputValue);

	console.log(lists);

  const openPopupList = () => {
		dispatch(setOpen());
	};

  const handleOnChange = (event) => {
		dispatch(inputOnChange(event.target.value));
	};

  const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(postNewList());
	};


	useEffect(() => {
		dispatch(resetItems());
	},[]);

	return (
		<div className="all_card">

			{ lists.map(list => (
				<>
					<header className="header_alltodolists">
						<Link to={ `/todolist/${ list.todolist_id }` } key={ list.todolist_id } className="link_alltodolists">
							<h2 className="title">{ list.todolist_title }</h2>
						</Link>
						<FaPen className="icon left" onClick={ openPopupList }/>
						<FaTrash className="icon"/>
					</header>

					<Popup open={ openModalList } >
						<form className='modifyPopUp' onSubmit={ handleSubmit }>
            <input type="text" name="modify_list" value={ inputValue } placeholder="Nouvelle liste" onChange={ handleOnChange }/>
							<button className='member__submit' type='submit'>Valider</button>
						</form>
					</Popup>
				</>
			))}

			{/* <Link to='/todolist/5' className="card_alltodolists">
				<header className="header_alltodolists">
					<h2 className="title">Loisirs</h2>
					<FaPen className="icon"/>
					<FaTrash className="icon"/>
				</header>

				<main className="main_alltodolists">
					<ul>
						<li>Trotinette</li>
						<li>Skate</li>
					</ul>
				</main>
			</Link>

			<Link to='/todolist/5' className="card_alltodolists">
				<header className="header_alltodolists">
					<h2 className="title">Sandwich</h2>
					<FaPen className="icon"/>
					<FaTrash className="icon"/>
				</header>

				<main className="main_alltodolists">
					<ul>
						<li>sandwich</li>
						<li>tomate</li>
						<li>ognon</li>
						<li>sandwich</li>
						<li>tomate</li>
						<li>ognon</li>
						<li>sandwich</li>
						<li>tomate</li>
						<li>ognon</li>
						<li>sandwich</li>
						<li>tomate</li>
						<li>ognon</li>
						<li>sandwich</li>
						<li>tomate</li>
						<li>ognon</li>
						<li>sandwich</li>
						<li>tomate</li>
						<li>ognon</li>
						<li>sandwich</li>
						<li>tomate</li>
						<li>ognon</li>
					</ul>
				</main>
			</Link>

			<Link to='/todolist/5' className="card_alltodolists">
				<header className="header_alltodolists">
					<h2 className="title">Ecole</h2>
					<FaPen className="icon"/>
					<FaTrash className="icon"/>
				</header>

				<main className="main_alltodolists">
					<ul>
						<li>Cahier</li>
						<li>Crayon</li>
						<li>Gomme</li>
						<li>Stylo</li>
					</ul>
				</main>
			</Link> */}

		</div>

	);
};

// == Export
export default AllTodolists;
