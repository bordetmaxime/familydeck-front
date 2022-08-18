// == Import
import './styles.scss';
import { Link } from 'react-router-dom';

// == Composant
function Auth() {
  return (
    <div className="auth">
      <div>
        <input type="text" id="login" name="user_login" placeholder="Login"/>
        <input type="password" id="user_password" name="user_password" placeholder="Password"/>

        <Link to='/home'>
        <button>Je me connecte</button>
        </Link>

        <Link to='/inscription'>
        <p>Pas de compte ? je m'inscris!</p>
      </Link>
       
    </div>
    </div>
  );
}

// == Export
export default Auth;
