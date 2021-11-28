
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Spells from './components/Spells';
import Classes from './components/Classes';
import Races from './components/Races';
import './styles/App.css';

function App() {

  return (
    <BrowserRouter>
      <Nav/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/spells">
          <Spells/>
        </Route>
        <Route exact path="/races">
          <Races/>
        </Route>
        <Route exact path="/classes">
          <Classes/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
