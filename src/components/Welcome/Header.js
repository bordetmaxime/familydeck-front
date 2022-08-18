// == Import
import familyDeckLogo from '../../assets/logo.png';
import './styles.scss';

// == Composant
function Header() {
  return (
    <div className="header_welcome">
      <img src={familyDeckLogo} alt="logo family deck" />
      <h1>Family Deck</h1>
    </div>
  );
}

// == Export
export default Header;
