// == Import
import './styles.scss';

// == Import des icons
import { GrUserFemale } from '@react-icons/all-files/gr/GrUserFemale';
import { GrUser } from '@react-icons/all-files/gr/GrUser';
import { CgBoy } from '@react-icons/all-files/cg/CgBoy';

// == Composant du contenu de la page Membres par defaut
const Content = () => {
  
	return (
		<div className="content">

			<h2 className='title-member'>Gestion de ma famille</h2>

			<div className='content__button'>
				<div className='content__icon'>
					<GrUserFemale />
				</div>
				<h3>Maman</h3>
			</div>

			<div className='content__button'>
				<div className='content__icon'>
					<GrUser />
				</div>
				<h3>Papa</h3>
			</div>

			<div className='content__button'>
				<div className='content__icon'>
					<CgBoy />
				</div>
				<h3>Hugo</h3>
			</div>

		</div>
	);
};

// == Export
export default Content;
