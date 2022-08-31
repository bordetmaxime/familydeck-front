// == Import
import './styles.scss';

// == Import icones
import { FaPen } from '@react-icons/all-files/fa/FaPen';
import { FaTrash } from '@react-icons/all-files/fa/FaTrash';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


// == Composant visuel de toutes les todolists
const AllTodolists = () => {

	const lists = useSelector(state => state.todolist.lists);

	console.log(lists);

	return (
		<div className="all_card">

			{ lists.map(list => (
				<Link to={ `/todolist/${ list.todolist_id }` } key={ list.todolist_id } className="card_alltodolists">
					<header className="header_alltodolists">
						<h2 className="title">{ list.todolist_title }</h2>
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
