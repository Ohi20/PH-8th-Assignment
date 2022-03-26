import './App.css';
import QuesAns from './Components/QuesAns/QuesAns';
import Shop from './Components/Shop/Shop';

function App() {
  return (
    <div>
      <h1 className='Header'>Mouse Muse</h1>
      <hr></hr>
      <Shop></Shop>
      <QuesAns></QuesAns>
      
    </div>
  );
}

export default App;
