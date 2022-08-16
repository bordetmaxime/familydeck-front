// == Import
import familyDeckLogo from '../../assets/favicon.ico';
import './styles.scss';

// == Composant
const Header = () => {
	return (
		<div className="header">
			<img src={ familyDeckLogo } alt="logo family deck" />
      <div>
        <h1>Bonjour <span>Header</span></h1>
      </div>
      

		</div>
	);
};

// == Export
export default Header;
