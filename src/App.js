import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Description from './components/Description';
import Name from './components/Name';
import Price from './components/Price';
import Img from './components/Img';

function App() {
  var firstname=""
  return (
    <div className="App">
       <Card style={{ width: '18rem' }}>
    
      <Card.Body>
       <Img/>
       <Name/>
       <Description/>
       <Price/>
      </Card.Body>
    </Card>
    <h1>{firstname.length!==0?"Hello "+firstname:"Hello there!"}</h1>
    </div>
  );
}

export default App;
