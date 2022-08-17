// == Imports
import { Link } from 'react-router-dom';
import './styles.scss';

// == Composant
const EventsList = () => {
	return (
		<div className="eventsList">

      <Link to='/event/1' className='eventsList__item'>
        <h2>15 Sept</h2>
        <h3>Ecole Hugo</h3>
      </Link>

      <Link to='/event/1' className='eventsList__item'>
        <h2>17 Sept</h2>
        <h3>Karaté Hugo</h3>
      </Link>

      <Link to='/event/1' className='eventsList__item'>
        <h2>5 Oct</h2>
        <h3>Gouter anniversaire</h3>
      </Link>
     
		</div>
	);
};

// == Export
export default EventsList;
