import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import VendorAbout from '../pages/VendorAbout'
import VendorIndex from '../pages/VendorIndex'
import VendorEvent from '../pages/VendorEvents'
import VendorDiscount from '../pages/VendorDiscount'

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
            </Switch>
        </>
    )

}

export default VendorRouter
