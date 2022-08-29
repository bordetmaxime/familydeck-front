// == Import
import './styles.scss';

// == Import des icons
import { GrUserFemale } from '@react-icons/all-files/gr/GrUserFemale';
import { GrUser } from '@react-icons/all-files/gr/GrUser';
import { CgBoy } from '@react-icons/all-files/cg/CgBoy';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// == Composant du contenu de la page Membres par defaut
const Content = () => {

	const { members } = useSelector(state => state.family);
	const { familyName } = useSelector(state => state.user.family);
	console.log('members dans members index', members);
  
	return (
		<div className="content">

			<h2 className='title-member'>Gestion des { familyName }</h2>

			{ members.map((member, index) => (
				<div key={ member.member_id } className='content__button'>
					<Link to={ `/member/${ index }` } >
						<div className='content__icon'>
							{member.role_label === 'maman' ? <GrUserFemale /> : member.role_label === 'papa' ? <GrUser /> : <CgBoy />}
						</div>
						<h3>{member.role_label === 'maman' ? `Maman ${ member.member_firstname }` : member.role_label === 'papa' ? `Papa ${ member.member_firstname }` : member.member_firstname }</h3>
					</Link>
				</div>
			) )}

		</div>
	);
};

// == Export
export default Content;
