import React from 'react'
import { Switch, Route } from 'react-router-dom'
import BackendNav from '../components/backend/BackendNav'
import BackendOrder from '../components/backend/BackendOrder'
import BackendProduct from '../components/backend/BackendProduct'
import BackendMsg from '../components/backend/BackendMsg'
import BackendEvents from '../components/backend/BackendEvents'
import BackendData from '../components/backend/BackendData'
import BackendDiscount from 'components/backend/BackendDiscount'
import BackendOrderDetail from '../components/backend/BackendOrderDetail'
import BackendAddProduct from '../components/backend/BackendAddProduct'
import BackendAddMsg from '../components/backend/BackendAddMsg'
import EditEvent from '../components/backend/EditEvent'

function BackendRouter() {
  return (
    <>
      <h2 className="text-center mb-5 mt-3">賣家中心</h2>
      <div className="container d-flex">
        <BackendNav />
        <div className="flex-grow-1">
          <Switch>
            <Route path="/dashboard/order/detail/:orderid?">
              <BackendOrderDetail />
            </Route>
            <Route path="/dashboard/order/">
              <BackendOrder />
            </Route>
            <Route path="/dashboard/product/add">
              <BackendAddProduct />
            </Route>
            <Route path="/dashboard/product/:productid?">
              <BackendProduct />
            </Route>
            <Route path="/dashboard/msg/add">
              <BackendAddMsg />
            </Route>
            <Route path="/dashboard/msg/:msgid?">
              <BackendMsg />
            </Route>
            <Route path="/dashboard/events/:id">
              <EditEvent />
            </Route>
            <Route path="/dashboard/events">
              <BackendEvents />
            </Route>
            <Route path="/dashboard/discount/:discountid?">
              <BackendDiscount />
            </Route>
            <Route path="/dashboard/data">
              <BackendData />
            </Route>
          </Switch>
        </div>
      </div>
    </>
  )
}

export default BackendRouter
