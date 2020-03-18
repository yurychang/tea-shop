import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Index from 'pages/Index'
import MainBar from 'components/index/MainBar'
import './styles/index.scss'
import VendorRouter from './router/VendorRouter'
import Events from 'pages/Events'
import Event from 'pages/Event'
import Login from 'pages/Login'
import Singup from 'pages/Singup'
import MemberBar from 'components/membercenter/MemberBar'
//這是網址
import BackendRouter from 'router/BackendRouter'

function App() {
  return (

    <div className="App">
      <Router>
        <MainBar />
        <div className="sy_main-content">
          <Switch>
            <Route path="/events/:vendor/:id?">
              <Event />
            </Route>
            <Route path="/events">
              <Events />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/singup">
              <Singup />
            </Route>
            <Route path="/membercenter">
              <MemberBar />
            </Route>
            <VendorRouter />
            <Route path="/">
              <Index />
            </Route>
          </Switch>
        </div>
        <Switch>
          <Route path='/dashboard'>
            <BackendRouter />
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
