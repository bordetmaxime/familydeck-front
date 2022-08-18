// == Import
import './styles.scss';
import { Link } from 'react-router-dom';

// == Composant
function Start() {
  return (
    <div className="start">
          <button className="connection_button">Je me connecte</button>
          
      <Link to='/inscription'>
      <button className="inscription_button">Je m'inscris</button>
      </Link>
  
   
    </div>
  );
}

// == Export
export default Start;
