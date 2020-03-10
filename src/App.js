import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import MainBar from './components/MainBar';
import './scss/index.scss'

function App() {
  return (
    <div className="App">
      <MainBar />
      <div className="sy_main-content">
        <Router>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
