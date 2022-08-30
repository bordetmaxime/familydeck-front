// == Imports
import './styles.scss';

// == Imports icones
import { FaPen } from '@react-icons/all-files/fa/FaPen';
import { FaTrash } from '@react-icons/all-files/fa/FaTrash';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getMember } from '../../actions/member';

// == Composant
const Member = ({ id }) => {

	// const { members } = useSelector(state => state.family);
  // const family = useSelector(state => state.family);
	const memberId = Number(id);
	// console.log('MEMBERS====>', members);
	// console.log('FAMILY===>',family);


	// const memberSelected = members.find((member) => member.member_id === memberId );

	// console.log(memberSelected);

  const member = useSelector(state => state.member);
  const { familyName } = useSelector(state => state.family);
  const dispatch = useDispatch();

  // const modifyMember = () => {
  //   dispatch(setModify());
  // }


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

				</div>

				<h3 className='member__title3'>Infos connexion*</h3>

				<p id='member-login'>{ member.username }</p>

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
