// == Import
import './styles.scss';

// == Composant de selection de l'enfant
const ChildsSelect = () => {
	return (
		<div className="child">
			<select name="childs" id="child-select">
				<option value=""> Choisis un enfant</option>
				<option value="Hugo">Hugo</option>
				<option value="Nina">Nina</option>
			</select>
		</div>
	);
};

// == Export
export default ChildsSelect;
