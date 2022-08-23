// == Imports
import './styles.scss';

// == Imports icones
import { MdAddCircle } from '@react-icons/all-files/md/MdAddCircle';

// == Composant d'ajout d'un membre
const AddMember = () => {
	return (
		<div className="addMember">
     
			<MdAddCircle className='addMember__button'/>

		</div>
	);
};

// == Export
export default AddMember;
