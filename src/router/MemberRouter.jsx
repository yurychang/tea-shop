import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MemberNotice from 'components/memberpage/MemberNotice'
import Menu from 'components/membercenter/Menu'

export default function MemberRouter() {
  return (
    <div>
      <h2>會員中心</h2>
      <Menu />
      <Switch>
        <Route path="/membercenter/account"></Route>
        <Route path="/membercenter/notice">
          <MemberNotice />
        </Route>
      </Switch>
    </div>
  )
}
