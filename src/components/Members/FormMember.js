// == Imports
import './styles.scss';

// == Imports icones
import { FaPen } from '@react-icons/all-files/fa/FaPen';
import { FaTrash } from '@react-icons/all-files/fa/FaTrash';
import { useDispatch, useSelector } from 'react-redux';
import { delRedirectInfo, InputMember, patchMember, submitAddMember } from '../../actions/member';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// == Composant formulaire d'un membre pour ajout ou modification
const FormMember = () => {
	const navigate = useNavigate();
	const { familyName, familyId } = useSelector(state => state.user.family);
	const { firstname, username, roleId, datebirth, password, confirmPassword, topsize, bottomsize, shoesize, size, school, hobbies, memberId, redirectMember } = useSelector(state => state.member);

	const dispatch = useDispatch();

	useEffect(() => {
		if(redirectMember) {
			dispatch(delRedirectInfo());
			navigate('/members');
		}
	}, [ redirectMember ]);

	// Fonction d'enregistrement des valeurs des inputs
	const inputValue = (event) => {

		const name = event.target.name;
		const value = event.target.value;

		dispatch(InputMember(name, value));

	};  

	console.log('MEMBERID dans FormMember===>',memberId);

	const inscriptionSubmit = (event) => {
		event.preventDefault();
		memberId ? dispatch(patchMember()) : dispatch(submitAddMember());
	};

	return (
		<div className='member'>
			<h2 className='member__title2'>Famille: { familyName }</h2>

			<form className='member__form' onSubmit={ inscriptionSubmit }>

				<input id='familyId' name='familyId' type='hidden' value={ familyId } ></input>

				<div className='member__item'>
					<label htmlFor='member-firstName'>Prénom*</label>
					<input id='member-firstName' name='firstname' value={ firstname } placeholder='Prénom' required onChange={ inputValue }></input>
				</div>

				<div className='member__bloc'>
					<div className='member__item semi'>
						<label htmlFor='member-role'>Role*</label>
						<select name="roleId" value={ roleId } id='member-role' required onChange={ inputValue }>
							<option value=""> Choix du role</option>
							<option value="2">Maman</option>
							<option value="1">Papa</option>
							<option value="3">Enfant</option>
						</select>
					</div>
					<div className='member__item semi'>
						<label htmlFor='member-birthday'>Date de naissance*</label>
						<input id='member-birthday' value={ datebirth } name='datebirth' required onChange={ inputValue } />
					</div>
				</div>
        
				<h3 className='member__title3'>Morphologie</h3>

				<div className='member__bloc'>

					<div className='member__item semi'>
						<label htmlFor='member-height'>Taille en cm</label>
						<input type='number' id='member-height' value={ size } name='size' onChange={ inputValue }></input>
					</div>

					<div className='member__item semi'>
						<label htmlFor='member-foot'>Pointure</label>
						<input type='number' id='member-foot' value={ shoesize } name='shoesize' onChange={ inputValue }></input>
					</div>

					<div className='member__item semi'>
						<label htmlFor='member-top'>Taille haut</label>
						<input id='member-top' value={ topsize } name='topsize' placeholder='M / 38 / 6ans' onChange={ inputValue }></input>
					</div>

					<div className='member__item semi'>
						<label htmlFor='member-bottom'>Taille bas</label>
						<input id='member-bottom' value={ bottomsize } name='bottomsize' placeholder='M / 30 / 38 / 6ans' onChange={ inputValue }></input>
					</div>

          <div className='member__item semi'>
						<label htmlFor='member-school'>Ecole</label>
						<input id='member-school' value={ school } name='school' placeholder='Ecole Dampierre' onChange={ inputValue }></input>
					</div>

          <div className='member__item semi'>
						<label htmlFor='member-hobbies'>Hobbies</label>
						<input id='member-Hobbies' value={ hobbies } name='hobbies' placeholder='Hockey, peinture, danse...' onChange={ inputValue }></input>
					</div>

				</div>

				<h3 className='member__title3'>Infos connexion*</h3>

				<input className='member__item' id='member-login' value={ username } name='username' placeholder='Login' required onChange={ inputValue }></input>
				{ memberId ? '' :
					<input className='member__item' id='member-pwd' value={ password } name='password' placeholder='Mot de passe' type='password' required onChange={ inputValue }></input>
				}
				{ memberId ? '' : 
					<input className='member__item' id='member-pwdConfirm' value={ confirmPassword } name='confirmPassword' placeholder='Confirmation mot de passe' type='password' required onChange={ inputValue }></input>
				}
				<h4 className='member__alerte'>*Champ obligatoire</h4>

				<div className='member__buttons'>
					<button className='member__submit' type='submit'>Valider</button>
					<FaTrash />
				</div>

			</form>
     
		</div>
	);
};

// == Export
export default FormMember;
