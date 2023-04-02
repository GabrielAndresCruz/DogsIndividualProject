import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LandingPage from './Components/LandingPage/LandingPage'
import Home from './Components/Home/Home'
import DogCreate from './Components/DogCreate/DogCreate';
import DogDetail from './Components/DogDetail/DogDetail';
import DogUpdate from './Components/DogUpdate/DogUpdate';
import axios from 'axios';

axios.defaults.baseURL = 'http://dogsindividualproject-production.up.railway.app/'

function App() {
  return (
    // <div className='Background'>
    <BrowserRouter>
    <div className="App">
      <Switch>
      <Route exact path='/' component={LandingPage}/>
      <Route exact path='/home' component={Home}/>
      <Route exact path='/dogs' component={DogCreate}/>
      <Route exact path='/dogs/:id' component={DogDetail}/>
      <Route exact path='/updateDog/:id' component={DogUpdate}/>
      </Switch>
    </div>
    </BrowserRouter>
    // </div>
  );
}

export default App;
