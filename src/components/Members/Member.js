// == Imports
import './styles.scss';

// == Imports icones
import { FaPen } from '@react-icons/all-files/fa/FaPen';
import { FaTrash } from '@react-icons/all-files/fa/FaTrash';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// == Composant
const Member = () => {

	const member = useSelector(state => state.member);
	const { familyName } = useSelector(state => state.family);


	return (
		<div className='member'>
			<h2 className='member__title2'>{ familyName }</h2>

			<div className='member__infos'>
				<div className='member__item'>
					<h4 className='member__title4'>Prénom:</h4>
					<p id='member-firstName'>{ member.firstname }</p>
				</div>

				<div className='member__bloc'>
					<div className='member__item semi'>
						<h4 className='member__title4'>Role:</h4>
						<p id='member-role'>{ member.label }</p>
					</div>
					<div className='member__item semi'>
						<h4 className='member__title4'>Date de naissance:</h4>
						<p id='member-birthday'>{ member.datebirth }</p>
					</div>
				</div>
        
				<h3 className='member__title3'>Morphologie</h3>

				<div className='member__bloc'>

					<div className='member__item semi'>
						<h4 className='member__title4'>Taille en cm:</h4>
						<p id='member-height'>{ member.size }</p>
					</div>

					<div className='member__item semi'>
						<h4 className='member__title4'>Pointure:</h4>
						<p id='member-foot'>{ member.shoesize}</p>
					</div>

					<div className='member__item semi'>
						<h4 className='member__title4'>Taille haut:</h4>
						<p id='member-top'>{ member.topsize }</p>
					</div>

					<div className='member__item semi'>
						<h4 className='member__title4'>Taille bas:</h4>
						<p id='member-bottom'>{ member.bottomsize }</p>
					</div>

          <div className='member__item semi'>
						<h4 className='member__title4'>Ecole:</h4>
						<p id='member-top'>{ member.school }</p>
					</div>

					<div className='member__item semi'>
						<h4 className='member__title4'>Hobbies:</h4>
						<p id='member-bottom'>{ member.hobbies }</p>
					</div>
          

				</div>

				<h3 className='member__title3'>Infos connexion*</h3>

				<p id='member-login'>{ member.username }</p>

				<p id='member-password'></p>

				<p id='member-confirmPassword'></p>

				<div className='member__buttons'>
					<Link to={ '/member/modify' }>
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
