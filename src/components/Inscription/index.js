// == Import
import './styles.scss';
import { FaUsersCog } from 'react-icons/fa';
import Header from '../Header';

// == Composant
const Inscription = () => {
	return (

	<div className="inscription">

   	<Header />

     <h2 className="title_principal">Inscription</h2> 

    <form className="form_inscription" action="/" method="post" >

    <div className="family_name_content inscription_box">
    <label htmlFor="family_name">* Nom de la famille </label>
         <input type="text" id="family_name" name="user_family_name" required/>
    </div>

    <div className="inscription_box">
    <label htmlFor="name">Nom </label>
         <input type="text" id="name" name="user_name" placeholder="Nom"></input>
    </div>

    <div className="inscription_box">
    <label htmlFor="surname">* Prénom</label>
         <input type="text" id="surname" name="user_surname" placeholder="Prénom" required/>
    </div>

<div className="display_box">

    <div className="inscription_box role_and_date">
    <label htmlFor="role-select">* Rôle </label>
    <select name="role" id="role-select" required>
		<option value=""></option>
		<option value="père">Père</option>
		<option value="mère">Mère</option>
        <option value="fils">Fils</option>
        <option value="fille">Fille</option>
	</select>
      </div>

    <div className="inscription_box role_and_date">
    <label htmlFor="date">Date de naissance</label>
        <input type="date" id="date" name="user_date" placeholder="Date de naissance"/>
    </div>

    </div>

    <div className="inscription_box">
    <h3 className="center_title">* email</h3>
    <span className="span_line"></span>
        <input type="email" id="email" name="user_email" placeholder="email" className="input-margin" required/>
        <input type="email" id="validation_email" name="user_validation_email" placeholder="Confirmation email" required/>
    </div>

    <div className="inscription_box" >
    <h3 className="center_title">* Password </h3>
    <span className="span_line"></span>
        <input type="password" id="password" name="user_password" placeholder="Password" className="input-margin" required/>
        <input type="password" id="validation_password" name="user_validation_password" placeholder="Confirmation password" required/>
    </div>

    <p className="center_title text">* Champs obligatoire</p>

    <div className="center_button">  
    <button	type="submit"	id="center_title"> Valider</button>
     </div>

  </form>
  </div>
	);
};

// == Export
export default Inscription;
