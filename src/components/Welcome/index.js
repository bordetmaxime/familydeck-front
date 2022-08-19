// == Import
import Content from './content';
import Header from './Header';
import Start from './Start';
import Auth from './Auth';
import './styles.scss';

// == Composant

function Welcome({login}) {
  return (

    
    <div className="welcome">
      <Header />
      <Content />


      {login ? <Auth /> : <Start /> }
      

    </div>
  );
}

// == Export
export default Welcome;
