// == Imports
import './styles.scss';

// == Imports icones
import { FaPen } from '@react-icons/all-files/fa/FaPen';
import { FaTrash } from '@react-icons/all-files/fa/FaTrash';

// == Composant
const Event = () => {
	return (
		<div className="event">

			<form className='event__form'>
				<input id='event-date' type='date' value="" name='event-date' required />

        <div className='event__item'>
					<label htmlFor='event-title'>* Titre</label>
					<input id='event-title' name='event-title' value="" placeholder='Rendez vous maitresse' required ></input>
				</div>

				<div className='event__item'>
					<label htmlFor='event-cat'>* Catégorie de l'évènment</label>
					<input id='event-cat' name='event-cat' value="" placeholder='Sport, école, medecin...' required ></input>
				</div>

				<div className='event__item'>
					<label htmlFor='event-place'>Lieux</label>
					<input id='event-place' name='event-place' value="" placeholder='Rendez vous 4ème sous-sol...'></input>
				</div>

				<div className='event__item'>
					<label htmlFor='event-parent'>* Parent(s) concerné(s)</label>
					<select name="childs" id="event-parent" required >
						<option value=""> Choisis le/les parent(s)</option>
						<option value="Maman">Maman</option>
						<option value="Papa">Papa</option>
					</select>
				</div>

				<div className='event__item'>
					<label htmlFor='event-infos'>Information(s) complémentaire(s)</label>
					<textarea id='event-infos' name='event-info' value="" placeholder='Préparer des sandwichs, voir avec la maman du petit Bernard...'></textarea>
				</div>

        <p className="event__info">* Champs obligatoire</p>

        <div className='event__buttons'>

          <FaPen />
          <button type='submit'>Valider</button>
          <FaTrash />
        </div>

			</form>
     
		</div>
	);
};

// == Export
export default Event;
