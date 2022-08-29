// == Imports
import './styles.scss';

// == Imports icones
import { MdAddCircle } from '@react-icons/all-files/md/MdAddCircle';
import { Link } from 'react-router-dom';

// == Composant d'ajout d'un membre
const AddMember = () => {



	return (
		<div className="addMember">
      <Link to='/FormMember'>
        <MdAddCircle className='addMember__button' />
      </Link>
		</div>
	);
};

// == Export
export default AddMember;
