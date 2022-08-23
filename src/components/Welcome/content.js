// == Import
import './styles.scss';

// == Import icones
import { AiOutlineDown } from 'react-icons/ai';

// == Composant du contenu de la page d'accueil
const Content = () => {
	return (
		<div className="content_welcome">
			<p>
      In diam quam, dapibus efficitur lorem sed, sagittis eleifend metus. Etiam auctor efficitur nunc, eu convallis nisl lobortis a. Cras rutrum sapien quis pellentesque porta. Pellentesque sit amet tincidunt erat. Aliquam ligula mauris, faucibus ac vulputate et, venenatis in lorem. Sed eu convallis velit, sit amet aliquam libero. Fusce suscipit condimentum risus quis rhoncus. Sed porttitor, quam quis aliquam tincidunt, libero augue fringilla velit, a malesuada lorem mauris a mauris. Mauris ornare fringilla nisl eget tincidunt. Integer vulputate efficitur semper. Ut ultricies, lectus vitae dignissim imperdiet, magna magna ornare ex, sit amet varius mauris metus at felis. Ut rhoncus arcu rhoncus metus ornare consectetur. Nunc pellentesque nec turpis feugiat dapibus. Aliquam erat volutpat. Praesent sodales arcu sit amet lacus molestie, in laoreet velit facilisis.
			</p>
			<p className="more-information">En savoir plus</p>
			<AiOutlineDown className="more-information"/>
		</div>
	);
};

// == Export
export default Content;

