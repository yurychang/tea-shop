import React, { useState, useReducer } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
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
import Product from './pages/Product'
import CartBox from './pages/CartBox'
import CartList from './pages/CartList'
import Checkout from './pages/Checkout'
import PayInfo from './pages/PayInfo'
import OrderComplete from './pages/OrderComplete'
import Flavor from './pages/Flavor'

import Loading from 'utils/Loading'
//這是網址
import BackendRouter from 'router/BackendRouter'
import PreVendorRouter from 'router/PreVendorRouter'
import VendorLogin from 'pages/VendorLogin'
import AllVendors from 'pages/AllVendors'

import { Provider } from 'hooks/useCartContext'
import useCart from 'hooks/useCart'

function App() {
  const cart = useCart()
  // function countCart() {
  //   const cart = JSON.parse(localStorage.getItem('cart'))
  //   let num = 0
  //   if (cart) {
  //     cart.forEach(el => (num += el.amount))
  //   }
  //   return num
  // }
  // const [cartCount, setCartCount] = useReducer(countCart, undefined, countCart)
  return (
    <div className="App">
      <Provider value={cart}>
        <Router>
          <Switch>
            <Route path="/dashboard">
              <BackendRouter />
            </Route>
            <Route path="/vendortest">
              <PreVendorRouter />
            </Route>
            <Route path="/">
              <Loading color="#4c4c4c" type="spin" />
              <MainBar />
              <div className="sy_main-content">
                <Switch>
                  <Route path="/events/:id">
                    <Event />
                  </Route>
                  <Route path="/events">
                    <Events />
                  </Route>
                  <Route path="/allstore">
                    <AllVendors />
                  </Route>
                  <Route path="/checkout">
                    <Checkout />
                  </Route>
                  <Route path="/payinfo">
                    <PayInfo />
                  </Route>
                  <Route path="/ordercomplete">
                    <OrderComplete />
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
                  <Route path="/commodity/:id?">
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
                  <Route path="/vendor">
                    <VendorRouter />
                  </Route>
                  <Route path="/flavor">
                    <Flavor />
                  </Route>
                  <Route path="/">
                    <Index />
                  </Route>
                </Switch>
              </div>
            </Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  )
}

export default App
