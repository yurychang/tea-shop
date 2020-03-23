import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Index from 'pages/Index'
import MainBar from 'components/Mainbar/MainBar'
import './styles/index.scss'
import VendorRouter from './router/VendorRouter'
import Events from 'pages/Events'
import Event from 'pages/Event'
import Login from 'pages/Login'
import Signup from 'pages/Signup'
import VendorSignup from 'pages/VendorSignup'
import MemberRouter from 'router/MemberRouter'
import Commodity from './pages/Commodity'
import Product from './components/pj_event/Product'
import CartBox from './pages/CartBox'
import CartList from './pages/CartList'
import Checkout from './pages/Checkout'

import Loading from 'utils/Loading'
//這是網址
import BackendRouter from 'router/BackendRouter'
import VendorLogin from 'pages/VendorLogin'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <Route path="/Index">
            <MainBar />
            <Index />
          </Route> */}
          <Route path="/dashboard">
            <BackendRouter />
          </Route>
          <Route path="/">
            <Loading color="#4c4c4c" type="spin" />
            <MainBar />
            <div className="sy_main-content">
              <Switch>
                <Route path="/Index">
                  <Index />
                </Route>
                <Route path="/events/:id">
                  <Event />
                </Route>
                <Route path="/events">
                  <Events />
                </Route>
                <Route path="/checkout">
                  <Checkout />
                </Route>
                <Route path="/login/vendor">
                  <VendorLogin />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/signup/vendor">
                  <VendorSignup />
                </Route>
                <Route path="/signup">
                  <Signup />
                </Route>
                <Route path="/commodity">
                  <Commodity />
                </Route>
                <Route path="/product">
                  <Product />
                </Route>
                <Route path="/cartBox">
                  <CartBox />
                  CartList
                </Route>
                <Route path="/cartList">
                  <CartList />
                </Route>
                <Route path="/membercenter">
                  <MemberRouter />
                </Route>
                <VendorRouter />
              </Switch>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
