import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import VendorAbout from '../../pages/VendorAbout'
import VendorIndex from '../../pages/VendorIndex'

function VendorRouter() {

    return (
        <>
        <Route path='/vendorindex/:id?'>
            <VendorIndex />
        </Route>
        <Route path='/vendorabout/:id?'>
            <VendorAbout />
        </Route>
        </>
    )

}

export default VendorRouter
