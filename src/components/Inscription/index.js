// == Import
import './styles.scss';
import { FaUsersCog } from 'react-icons/fa';
import Header from './Header';
import PropTypes from 'prop-types';

// == Composant
const Inscription = ({ familyName, setFamilyName ,lastname ,setLastName ,firstname,setFirstname,roleId,setRoleId,dateBirth,setDateBirth,email ,setEmail,confirmEmail,setconfirmEmail,password,setPassword,confirmPassword,setConfirmPassword, inscriptionSubmit }) => {

	// Fonction d'enregistrement des valeurs des inputs
	const inputValue = (event) => {

		console.log(event.target.name);

		switch (event.target.name) {

			case 'familyName':
				setFamilyName(event.target.value);
				break;
      
			case 'lastname':
				setLastName(event.target.value);
				break;
      
			case 'firstname':
				setFirstname(event.target.value);
				break;

			case 'roleId':
				const role = Number(event.target.value);
				setRoleId(role);
				break;

			case 'dateBirth':
				setDateBirth(event.target.value);
				break;

			case 'email':
				setEmail(event.target.value);
				break;

			case 'confirmEmail':
				setconfirmEmail(event.target.value);
				break;
      
			case 'password':
				setPassword(event.target.value);
				break;

			case 'confirmPassword':
				setConfirmPassword(event.target.value);
				break;
      
			default:
				console.log('Error nputValue du formulaire d\'enregistrement');
		}


		// if (event.target.name === 'familyName') {
		// 	setFamilyName(event.target.value);
    

		// } else {
		// 	setPassword(event.target.value);
		// }
	};  


	return (

		<div className="inscription">

			<Header />

			<h2 className="title_principal">Inscription</h2> 

			<form className="form_inscription" onSubmit={ inscriptionSubmit } >

				<div className="family_name_content inscription_box">
					<label htmlFor="family_name">* Nom de la famille </label>
					<input type="text" value={ familyName } id="family_name" name="familyName" required onChange={ inputValue }/>
				</div>

				<div className="inscription_box">
					<label htmlFor="name">* Nom </label>
					<input type="text" value={ lastname } id="name" name="lastname" placeholder="Nom" onChange={ inputValue }></input>
				</div>

				<div className="inscription_box">
					<label htmlFor="surname">* Prénom</label>
					<input type="text" value={ firstname } id="surname" name="firstname" placeholder="Prénom" required onChange={ inputValue }/>
				</div>

				<div className="display_box">

					<div className="inscription_box role_and_date">
						<label htmlFor="role-select">* Rôle </label>
						<select name="roleId" value={ roleId } id="role-select" required onChange={ inputValue }>
							<option value=""></option>
							<option value="1">Père</option>
							<option value="2">Mère</option>
							<option value="3">Enfant</option>
						</select>
					</div>

					<div className="inscription_box role_and_date">
						<label htmlFor="date">* Date de naissance</label>
						<input type="text" value={ dateBirth } id="date" name="dateBirth" placeholder="25/12/1900" required onChange={ inputValue }/>
					</div>

				</div>

				<div className="inscription_box">
					<h3 className="center_title">* email</h3>
					<span className="span_line"></span>
					<input type="email" value={ email } id="email" name="email" placeholder="email" className="input-margin" required onChange={ inputValue }/>
					<input type="email" value={ confirmEmail } id="validation_email" name="confirmEmail" placeholder="Confirmation email" required onChange={ inputValue }/>
				</div>

				<div className="inscription_box" >
					<h3 className="center_title">* Password </h3>
					<span className="span_line"></span>
					<input type="password" value={ password } id="password" name="password" placeholder="Password" className="input-margin" required onChange={ inputValue }/>
					<input type="password" value={ confirmPassword } id="validation_password" name="confirmPassword" placeholder="Confirmation password" required onChange={ inputValue }/>
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

Inscription.propTypes = {
	familyName: PropTypes.string,
	setFamilyName: PropTypes.func, 
	lastname: PropTypes.string,
	setLastName: PropTypes.func,
	firstname: PropTypes.string,
	setFirstname: PropTypes.func,  
	roleId: PropTypes.number,
	setRoleId: PropTypes.func,
	dateBirth: PropTypes.string,
	setDateBirth: PropTypes.func,
	email: PropTypes.string, 
	setEmail: PropTypes.func,
	confirmEmail: PropTypes.string,
	setconfirmEmail: PropTypes.func,
	password: PropTypes.string,
	setPassword: PropTypes.func,
	confirmPassword: PropTypes.string,
	setConfirmPassword: PropTypes.func,
	inscriptionSubmit: PropTypes.func,
};

  