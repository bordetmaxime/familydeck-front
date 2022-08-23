// == Imports
import './styles.scss';

// == Imports icones
import { FaPen } from '@react-icons/all-files/fa/FaPen';
import { FaTrash } from '@react-icons/all-files/fa/FaTrash';
import { Link } from 'react-router-dom';

// == Composant
const Member = () => {
	return (
		<div className='member'>
			<h2 className='member__title2'>Nom de la famille</h2>

      <div className='member__infos'>
				<div className='member__item'>
					<h4 className='member__title4'>Prénom:</h4>
					<p id='member-firstName'>member-firstName</p>
				</div>

				<div className='member__bloc'>
					<div className='member__item semi'>
						<h4 className='member__title4'>Role:</h4>
						<p id='member-role'>role du membre</p>
					</div>
					<div className='member__item semi'>
						<h4 className='member__title4'>Date de naissance:</h4>
						<p id='member-birthday'>member-birthday</p>
					</div>
				</div>
        
				<h3 className='member__title3'>Morphologie</h3>

				<div className='member__bloc'>

					<div className='member__item semi'>
						<h4 className='member__title4'>Taille en cm:</h4>
						<p id='member-height'>member-height</p>
					</div>

					<div className='member__item semi'>
						<h4 className='member__title4'>Pointure:</h4>
						<p id='member-foot'>member-foot</p>
					</div>

					<div className='member__item semi'>
						<h4 className='member__title4'>Taille haut:</h4>
						<p id='member-top'>member-top</p>
					</div>

					<div className='member__item semi'>
						<h4 className='member__title4'>Taille bas:</h4>
						<p id='member-bottom'>member-bottom</p>
					</div>

				</div>

				<h3 className='member__title3'>Infos connexion*</h3>

				<p id='member-login'>member-login</p>

        <p id='member-password'></p>

        <p id='member-confirmPassword'></p>

				<div className='member__buttons'>
          <Link to='/member/:id/modify'>
            <FaPen />
          </Link>
					<FaTrash />
				</div>
      </div>
		</div>
	);
};

// == Export
export default Member;
