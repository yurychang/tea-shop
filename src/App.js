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
import Commodity from './pages/Commodity'
import Product from './components/pj_event/Product'
//這是網址
import BackendRouter from 'router/BackendRouter'

function App() {
  return (
    <div className="App">
      <Router>
<<<<<<< HEAD
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
=======
>>>>>>> 0235f5eea641a57792f5587fb4df25a3c6c0869f
        <Switch>
          <Route path="/dashboard">
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
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/singup">
                  <Singup />
                </Route>
                <Route path="/commodity">
                  <Commodity />
                </Route>
                <Route path="/product">
                  <Product />
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
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
