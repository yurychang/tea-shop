import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PreVendorAbout from '../pages/vendorpreview/PreVendorAbout'
import PreVendorIndex from '../pages/vendorpreview/PreVendorIndex'
import PreVendorEvent from '../pages/vendorpreview/PreVendorEvents'
import PreVendorDiscount from '../pages/vendorpreview/PreVendorDiscount'

function VendorRouter() {


    return (
        <>
                <Route path='/vendortest/:id?/index'>
                    <PreVendorIndex/>
                </Route>
                <Route path='/vendortest/:id?/about'>
                    <PreVendorAbout />
                </Route>
                <Route path='/vendortest/:id?/events'>
                    <PreVendorEvent />
                </Route>
                <Route path='/vendortest/:id?/discount'>
                    <PreVendorDiscount />
                </Route>
        </>
    )

}

export default VendorRouter
