// == Imports
import './styles.scss';

// == Imports icones
import { FaPen } from '@react-icons/all-files/fa/FaPen';
import { FaTrash } from '@react-icons/all-files/fa/FaTrash';

// == Composant
const Member = () => {
	return (
		<div className='member'>
      <h2>Nom de la famille</h2>

			<form className='member__form'>

				<div className='member__item'>
					<label htmlFor='member-firstName'>Prénom*</label>
					<input id='member-firstName' name='member-firstName' value="" placeholder='Prénom' required ></input>
				</div>

        <div className='member__bloc'>
          <div className='member__item'>
            <label htmlFor='member-role'>Role*</label>
            <select name="role" id='member-role' required >
              <option value=""> Choix du role</option>
              <option value="Maman">Maman</option>
              <option value="Papa">Papa</option>
              <option value="Papa">Enfant</option>
            </select>
          </div>
          <div className='member__item'>
            <label htmlFor='member-birthday'>Date de naissance*</label>
            <input id='member-birthday' type='date' value="" name='member-birthday' required />
          </div>
        </div>

				

        
        <h3>Morphologie</h3>

        <label htmlFor='member-height'>Taille en cm</label>
        <input type='number' id='member-height' value='' name='member-height'></input>

        <label htmlFor='member-foot'>Pointure</label>
        <input type='number' id='member-foot' value='' name='member-foot'></input>

        <label htmlFor='member-top'>Taille haut</label>
        <input id='member-top' value='' name='member-top' placeholder='M / 38 / 6ans'></input>

        <label htmlFor='member-bottom'>Taille bas</label>
        <input id='member-bottom' value='' name='member-bottom' placeholder='M / 30 / 38 / 6ans'></input>

        <h3>Infos connexion*</h3>

        <input id='member-login' value='' name='member-login' placeholder='Login' required></input>

        <input id='member-pwd' value='' name='member-pwd' placeholder='Mot de passe' required></input>

        <input id='member-pwdConfirm' value='' name='member-pwdConfirm' placeholder='Confirmation mot de passe' required></input>

        <h4>*Champ obligatoire</h4>

        <div className='member__buttons'>
          <FaPen />
          <button type='submit'>Valider</button>
          <FaTrash />
        </div>

			</form>
     
		</div>
	);
};

// == Export
export default Member;
