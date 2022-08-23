// == Imports
import './styles.scss';

// == Imports icones
import { MdAddCircle } from '@react-icons/all-files/md/MdAddCircle';

// == Composant d'ajout d'evenement
const AddEvent = () => {
	return (
		<div className="addEvent">
     
			<MdAddCircle className='addEvent__button'/>

		</div>
	);
};

// == Export
export default AddEvent;
