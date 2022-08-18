// == Imports
import './styles.scss';

// == Imports icones
import { FaPen } from '@react-icons/all-files/fa/FaPen';
import { FaTrash } from '@react-icons/all-files/fa/FaTrash';

// == Composant
const Member = () => {
	return (
		<div className='member'>
      <h2 className='member__title2'>Nom de la famille</h2>

			<form className='member__form'>

				<div className='member__item'>
					<label htmlFor='member-firstName'>Prénom*</label>
					<input id='member-firstName' name='member-firstName' value="" placeholder='Prénom' required ></input>
				</div>

        <div className='member__bloc'>
          <div className='member__item semi'>
            <label htmlFor='member-role'>Role*</label>
            <select name="role" id='member-role' required >
              <option value=""> Choix du role</option>
              <option value="Maman">Maman</option>
              <option value="Papa">Papa</option>
              <option value="Papa">Enfant</option>
            </select>
          </div>
          <div className='member__item semi'>
            <label htmlFor='member-birthday'>Date de naissance*</label>
            <input id='member-birthday' type='date' value="" name='member-birthday' required />
          </div>
        </div>
        
        <h3 className='member__title3'>Morphologie</h3>

        <div className='member__bloc'>

          <div className='member__item semi'>
            <label htmlFor='member-height'>Taille en cm</label>
            <input type='number' id='member-height' value='' name='member-height'></input>
          </div>

          <div className='member__item semi'>
            <label htmlFor='member-foot'>Pointure</label>
            <input type='number' id='member-foot' value='' name='member-foot'></input>
          </div>

          <div className='member__item semi'>
            <label htmlFor='member-top'>Taille haut</label>
            <input id='member-top' value='' name='member-top' placeholder='M / 38 / 6ans'></input>
          </div>

          <div className='member__item semi'>
            <label htmlFor='member-bottom'>Taille bas</label>
            <input id='member-bottom' value='' name='member-bottom' placeholder='M / 30 / 38 / 6ans'></input>
          </div>

        </div>

        <h3 className='member__title3'>Infos connexion*</h3>

        <input className='member__item' id='member-login' value='' name='member-login' placeholder='Login' required></input>

        <input className='member__item' id='member-pwd' value='' name='member-pwd' placeholder='Mot de passe' required></input>

        <input className='member__item' id='member-pwdConfirm' value='' name='member-pwdConfirm' placeholder='Confirmation mot de passe' required></input>

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
