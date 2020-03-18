import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
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


function BackendRouter() {


    return (
        <>

            <h2 class="text-center mb-5 mt-3">賣家中心</h2>
            <div className="container d-flex">
                <BackendNav />
                <Switch>

                    <Route path='/dashboard/:id?/order/detail/:orderid?'>
                        <BackendOrderDetail />
                    </Route>
                    <Route path='/dashboard/:id?/order/'>
                        <BackendOrder />
                    </Route>
                    <Route path='/dashboard/:id?/product/add'>
                        <BackendAddProduct />
                    </Route>
                    <Route path='/dashboard/:id?/product/:productid?'>
                        <BackendProduct />
                    </Route>
                    <Route path='/dashboard/:id?/msg/add'>
                        <BackendAddMsg />
                    </Route>
                    <Route path='/dashboard/:id?/msg/:msgid?'>
                        <BackendMsg />
                    </Route>
                    <Route path='/dashboard/:id?/events/:eventid?'>
                        <BackendEvents />
                    </Route>
                    <Route path='/dashboard/:id?/discount/:discountid?'>
                        <BackendDiscount />
                    </Route>
                    <Route path='/dashboard/:id?/data'>
                        <BackendData />
                    </Route>
                </Switch>
            </div>
        </>
    )

}

export default BackendRouter
