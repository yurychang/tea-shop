import React from 'react'
import { Link, Router, Route, Switch } from 'react-router-dom'
import Memberpage from '../memberpage/MemberNotice'
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
            <Route path="/MemberNotice">
              <Memberpage />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  )
}
