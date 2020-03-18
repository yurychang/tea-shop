import React from 'react'
import { Link, Router, Route, Switch } from 'react-router-dom'
import Memberpage from '../memberpage/Memberpage'
import Menu from '../membercenter/Menu'

export default function MemberBar() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-3">
          <Menu />
        </div>
        <div className="col-sm-9">
          <Switch>
            <Route path="/memberpage">
              <Memberpage />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  )
}
