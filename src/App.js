import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import MainBar from './components/MainBar'
import './styles/index.scss'
import VendorIndex from './pages/VendorIndex'
import Events from './pages/Events'

function App() {
  return (
    <div className="App">
      <Router>
        <MainBar />
        <div className="sy_main-content">
          <Switch>
            <Route path="/events">
              <Events />
            </Route>
            <Route path="/vendorindex/:id?">
              <VendorIndex />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
