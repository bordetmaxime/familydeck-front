// == Import
import './styles.scss';
import { IoMdAddCircle } from 'react-icons/io';
import Header from '../Header';
import AllTodolists from './alltodolist';


// == Composant
const Todolists= () => {
	return (
		<div className="todolist">
  <Header />
  

  <div className="form_div">
  <form action="/" method="post" >
 
  <div id="add_card_todo">
        <input type="text" id="add_card" name="add_card" placeholder="Nom de la liste"/>
        <IoMdAddCircle className="icon"/>
    </div>
    </form>
    </div>


<AllTodolists />

</div>

	);
};

// == Export
export default Todolists;
