// == Import
import Content from './content';
import Header from './Header';
import Start from './Start';
import './styles.scss';

// == Composant
function Welcome() {
  return (
    <div className="welcome">
      <Header />
      <Content />
      <Start />
    </div>
  );
}

// == Export
export default Welcome;
