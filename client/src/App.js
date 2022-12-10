import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LandingPage from './Components/LandingPage/LandingPage'
import Home from './Components/Home/Home'
import DogCreate from './Components/DogCreate/DogCreate';
import DogDetail from './Components/DogDetail/DogDetail';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
      <Route exact path='/' component={LandingPage}/>
      <Route exact path='/home' component={Home}/>
      <Route exact path='/dogs' component={DogCreate}/>
      <Route exact path='/dogs/:id' component={DogDetail}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
