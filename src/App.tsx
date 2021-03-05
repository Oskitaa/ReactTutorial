import React from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import './App.css';
import Repository from './components/repositorys';

function App() {
  return (
    <div className="App">

          <Router>
              <Switch>
                <Route path="/" />
                <Route path="/repository" component={Repository} />
              </Switch>
          </Router>
    </div>
  );
}

export default App;
