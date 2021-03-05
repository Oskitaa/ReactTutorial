import React from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Nav from './components/nav';
import Repository from './components/repositorys';

function App() {
  return (
    <div className="App">

          <Router>
              <Nav />
              <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/repository" component={Repository} />
              </Switch>
          </Router>
    </div>
  );
}

export default App;
