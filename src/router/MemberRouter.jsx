import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Menu from 'components/membercenter/Menu'
import MemberAccount from 'components/memberpage/MemberAccount'
import MemberNotice from 'components/memberpage/MemberNotice'

export default function MemberRouter() {
  return (
    <>
      <h2 className="text-center mb-5 mt-3 _yz_membercenter">會員中心</h2>
      <div className="container-fluid d-flex">
        <Menu />
        <Switch>
          <Route path="/membercenter/account">
            <MemberAccount />
          </Route>
          <Route path="/membercenter/notice">
            <MemberNotice />
          </Route>
        </Switch>
      </div>
    </>
  )
}
