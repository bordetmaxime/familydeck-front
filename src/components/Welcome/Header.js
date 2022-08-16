// == Import
import familyDeckLogo from '../../assets/favicon.ico';
import './styles.scss';

// == Composant
function Header() {
  return (
    <div className="header">
      <img src={familyDeckLogo} alt="logo family deck" />
      <h1>Composant : Header Welcome</h1>
    </div>
  );
}

// == Export
export default Header;
