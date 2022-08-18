// == Import
import Content from './content';
import Header from './Header';
import Start from './Start';
import Auth from './Auth';
import './styles.scss';

// == Composant
function Welcome() {
let user = false

  return (

    
    <div className="welcome">
      <Header />
      <Content />
      
      if (user) {
        
      }
      <Start />
      <Auth />
    </div>
  );
}

// == Export
export default Welcome;
