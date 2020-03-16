import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import VendorAbout from '../../pages/VendorAbout'
import VendorIndex from '../../pages/VendorIndex'
import VendorEvent from '../../pages/VendorEvents'
import VendorDiscount from '../../pages/VendorDiscount'

import BackendNav from '../../components/vendor/backend/BackendNav'
import BackendOrder from '../../components/vendor/backend/BackendOrder'

function VendorRouter() {

    const [heart, setHeart] = useState(true)

    return (
        <>
            <Switch>
                <Route path='/vendor/:id?/index'>
                    <VendorIndex heart={heart} trigger={() => { setHeart(!heart) }} />
                </Route>
                <Route path='/vendor/:id?/about'>
                    <VendorAbout />
                </Route>
                <Route path='/vendor/:id?/events'>
                    <VendorEvent />
                </Route>
                <Route path='/vendor/:id?/discount'>
                    <VendorDiscount />
                </Route>
                <Route path='/vendor/backendtest/:id?'>
                    <h2 class="text-center mb-5">賣家中心</h2>
                    <div className="container d-flex">
                        <BackendNav />
                        <BackendOrder pagename={"訂單管理"} />
                    </div>
                </Route>
            </Switch>
        </>
    )

}

export default VendorRouter
