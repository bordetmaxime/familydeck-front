// == Import
import './styles.scss';

// == Import icones
import { FaPen } from '@react-icons/all-files/fa/FaPen';
import { FaTrash } from '@react-icons/all-files/fa/FaTrash';
import { Link } from 'react-router-dom';

// == Import des hooks
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

// == Import des actions
import { inputModifListName, patchListModif, resetItems, setOpenModalList } from '../../actions/todolist';


// == Composant visuel de toutes les todolists
const AllTodolists = () => {

	const dispatch = useDispatch();

	const lists = useSelector(state => state.todolist.lists);
	const inputModifValue = useSelector(state => state.todolist.inputValue);
	const openModalList = useSelector(state => state.todolist.openModalList);
	const targetId = useSelector(state => state.todolist.targetId);

	// appel l'action d'afficher l'input de modification du nom de la liste ainsi que les corbeilles pour la suppression des items
	const openModal = (event) => {
		dispatch(setOpenModalList(event.target.id, event.target.getAttribute('name')));
	};

	// appel l'action l'enregistre dans le state la valeur de l'input de modification de nom de list
	const handleOnChange = (event) => {
		dispatch(inputModifListName(event.target.value));
	};

	// appel l'action d'enregistrement des modifications du nom de la liste en base API
	const SubmitModify = (event) => {
		event.preventDefault();
		dispatch(patchListModif());
	};

	// appel l'action de remise à zero du tableau d'item
	useEffect(() => {
		dispatch(resetItems());
	},[]);

	return (
		<div className="all_card">

			{ lists.map(list => (
				<div key={ list.todolist_id }>
					<header className="header_alltodolists">
						{ 
							openModalList && (list.todolist_id === Number(targetId)) ? 
								<form className='form_modify_todolist' onSubmit={ SubmitModify }>
									<input type="text" name="modify_list" value={ inputModifValue } placeholder={ list.todolist_title } onChange={ handleOnChange }/>
									<button className='member__submit' type='submit'>Valider</button>
								</form> :
								<>
									<Link to={ `/todolist/${ list.todolist_id }` } className="link_alltodolists">
										<h2 className="title">{ list.todolist_title }</h2>
									</Link>
									<FaPen id={ list.todolist_id } name={ list.todolist_title } className="icon left" onClick={ openModal }/>
									<FaTrash className="icon"/>
								</>
						}
					</header>
				</div>
			))}

		</div>

	);
};

// == Export
export default AllTodolists;
