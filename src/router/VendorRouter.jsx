import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import VendorAbout from '../pages/VendorAbout'
import VendorIndex from '../pages/VendorIndex'
import VendorEvent from '../pages/VendorEvents'
import VendorLocation from '../pages/VendorLocation'

function VendorRouter() {
  return (
    <>
      <Route path="/vendor/:id?/index">
        <VendorIndex />
      </Route>
      <Route path="/vendor/:id?/about">
        <VendorAbout />
      </Route>
      <Route path="/vendor/:id?/events">
        <VendorEvent />
      </Route>
      <Route path="/vendor/:id?/location">
        <VendorLocation />
      </Route>
    </>
  )
}

export default VendorRouter
