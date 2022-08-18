// == Import
import './styles.scss';
import { BsFillPencilFill } from 'react-icons/bs';
import { AiOutlineDelete } from 'react-icons/ai';


// == Composant
const AllTodolists = () => {
	return (
<div className="all_card">
 <div className="card_alltodolists">
  <header className="header_alltodolists">
<h2 className="title">Loisirs</h2>
<BsFillPencilFill className="icon"/>
<AiOutlineDelete className="icon"/>
  </header>

<main className="main_alltodolists">
<ul>
<li>Trotinette</li>
<li>Skate</li>
</ul>
</main>

</div>



<div className="card_alltodolists">
  <header className="header_alltodolists">
<h2 className="title">Sandwich</h2>
<BsFillPencilFill className="icon"/>
<AiOutlineDelete className="icon"/>
  </header>

<main className="main_alltodolists">
<ul>
<li>sandwich</li>
<li>tomate</li>
<li>ognon</li>
</ul>
</main>

</div>





<div className="card_alltodolists">
  <header className="header_alltodolists">
<h2 className="title">Ecole</h2>
<BsFillPencilFill className="icon"/>
<AiOutlineDelete className="icon"/>
  </header>

<main className="main_alltodolists">
<ul>
<li>Cahier</li>
<li>Crayon</li>
<li>Gomme</li>
<li>Stylo</li>
</ul>
</main>

</div>
</div>

	);
};

// == Export
export default AllTodolists;
