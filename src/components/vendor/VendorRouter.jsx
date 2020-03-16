import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import VendorAbout from '../../pages/VendorAbout'
import VendorIndex from '../../pages/VendorIndex'
import VendorEvent from '../../pages/VendorEvents'
import VendorDiscount from '../../pages/VendorDiscount'

function VendorRouter() {

    return (
        <>
        <Route path='/vendorindex/:id?'>
            <VendorIndex />
        </Route>
        <Route path='/vendorabout/:id?'>
            <VendorAbout />
        </Route>
        <Route path='/vendorevents/:id?'>
            <VendorEvent />
        </Route>
        <Route path='/vendordiscount/:id?'>
            <VendorDiscount />
        </Route>
        </>
    )

}

export default VendorRouter
