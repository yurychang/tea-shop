import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Index from 'pages/Index'
import MainBar from 'components/index/MainBar'
import './styles/index.scss'
import VendorRouter from './components/vendor/VendorRouter'
import Events from 'pages/Events'
import Event from 'pages/Event'
import Products from 'pages/Products'
import Commodity from './pages/Commodity'
import Product from './components/pj_event/Product'

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
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/commodity">
              <Commodity />
            </Route>
            <Route path="/product">
              <Product />
            </Route>
            <VendorRouter />
            <Route path="/">
              <Index />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
