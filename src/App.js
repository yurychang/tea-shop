import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import MainBar from './components/MainBar'
import './scss/index.scss'
import EventsList from './pages/Events'
import VendorIndex from './pages/VendorIndex'

function App() {
  return (
    <div className="App">
      <Router>
        <MainBar />
        <div className="sy_main-content">
          <Switch>
            <Route path="/events">
              <EventsList />
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
