import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Index from 'pages/Index'
import MainBar from 'components/index/MainBar'
import './styles/index.scss'
import VendorRouter from './components/vendor/VendorRouter'
import Events from 'pages/Events'
import Event from 'pages/Event'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/dashboard">
            <p>asdasd</p>
            <Switch>
              <Route path="/dashboard/events">
                <p>dashboard/events</p>
              </Route>
              <Route path="/dashboard/vendor">
                <p>dashboard/vendor</p>
              </Route>
              <Route path="/">
                <p>dashboard</p>
              </Route>
            </Switch>
          </Route>
          <Route path="/">
            <MainBar />
            <div className="sy_main-content">
              <Switch>
                <Route path="/events/:vendor/:id?">
                  <Event />
                </Route>
                <Route path="/events">
                  <Events />
                </Route>
                <Route path="/vendor">
                  <VendorRouter />
                </Route>
                <Route path="/">
                  <Index />
                </Route>
              </Switch>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
