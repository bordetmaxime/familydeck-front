// == Import
import './styles.scss';
import { FaPen } from '@react-icons/all-files/fa/FaPen';
import { FaTrash } from '@react-icons/all-files/fa/FaTrash';
import { IoMdAddCircle } from 'react-icons/io';
import Header from '../Header';
import Nav from '../Nav';


// == Composant
const Todolist= () => {
	return (

		<div className="content">
         <Header/>
         
<div className="card">
  <header className="header_todolist">
<h2 className="title">Ecole</h2>
<FaPen className="icon"/>
<FaTrash className="icon"/>
  </header>

  <form action="/" method="post" className="form_card" >
 
 <div id="add_card_div">
       <input type="text" id="add_card" name="add_card" placeholder="Nom du nouvel élément"/>
       <IoMdAddCircle className="icon"/>
   </div>
   </form>

<main className="main_card">
<ul>
  <div className="item_card">
<li><input type="checkbox" id="scales" name="scales"></input>Cahier </li> 
<p>Avant le 17 aout</p>
</div>

<div className="item_card">
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
</div>

</ul>
</main>

</div>
<Nav/>
      
		</div>
	);
};

// == Export
export default Todolist;