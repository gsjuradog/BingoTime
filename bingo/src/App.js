
import './App.css';
import Board from './components/Board';
import {items, posibilities} from './utils/mockdata';
import Ups from './components/Ups';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/ups">
            <Ups></Ups>
          </Route>
          <Route path="/" exact>
            <Board items={items} winPosibilities={posibilities}></Board>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
