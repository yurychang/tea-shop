import React from 'react'
import { Switch, Route, Link, Redirect } from 'react-router-dom'
import BackendNav from '../components/backend/BackendNav'
import BackendOrder from '../components/backend/BackendOrder'
import BackendProduct from '../components/backend/BackendProduct'
import BackendMsg from '../components/backend/BackendMsg'
import BackendEvents from '../components/backend/BackendEvents'
import BackendData from '../components/backend/BackendData'
import BackendDiscount from 'components/backend/BackendLocation'
import BackendOrderDetail from '../components/backend/BackendOrderDetail'
import BackendAddProduct from '../components/backend/BackendAddProduct'
import BackendAddMsg from '../components/backend/BackendAddMsg'
import EditEvent from '../components/backend/EditEvent'
import BackendEditMsg from '../components/backend/BackendEditMsg'
import { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

function BackendRouter() {


  const localId = sessionStorage.getItem('vendorOnlyId')
  const [logout, setLogout] = useState(false)

  const [logoutDialog, setLogoutDialog] = useState(false)

  const logoutJump = (<Redirect to="/index" />)
  const Dialog = (<><Modal.Dialog
    size="md"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        您已登出，感謝您的使用
    </Modal.Title>
    </Modal.Header>
    <Modal.Footer>
      <Button onClick={() => { setLogoutDialog(true) }}>Close</Button>
    </Modal.Footer>
  </Modal.Dialog></>)



  const logoumethod = event => {
    event.preventDefault()
    sessionStorage.removeItem('vendorOnlyId')
    setVendorLogout()
    setLogout(true)
  }

  async function setVendorLogout() {
    const request = new Request('http://localhost:3333/vendor/logout', {
      method: 'GET',
      credentials: 'include',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),

    })

    const response = await fetch(request)
    const data = await response.json()
  }

  if (logout) {
    return (<>
      {logoutDialog ? logoutJump : Dialog}
    </>)
  }


  if (!localId) {
    alert('您沒有權限，請先登入')
    return <Redirect to="/index" />

  }

  return (
    <>
      <h2 className="text-center mb-5 mt-3">賣家中心</h2>
      <div className="ls-logoutandpreview container d-flex justify-content-end">
        <Link className="btn btn-main mb-2 ml-2" to={`/vendortest/${localId}/index/`}>預覽商店頁</Link>
        <Link className="btn btn-danger mb-2 ml-2" onClick={event => logoumethod(event)} to="">登出</Link>
      </div>
      <div className="container d-flex">
        <BackendNav />
        <div className="flex-grow-1">
          <Switch>
            <Route path="/dashboard/order/detail/:orderid?">
              <BackendOrderDetail />
            </Route>
            <Route path="/dashboard/order/">
              <BackendOrder />
            </Route>
            <Route path="/dashboard/product/add">
              <BackendAddProduct />
            </Route>
            <Route path="/dashboard/product/:productid?">
              <BackendProduct />
            </Route>
            <Route path="/dashboard/msg/edit/:msgid?">
              <BackendEditMsg />
            </Route>
            <Route path="/dashboard/msg/add">
              <BackendAddMsg />
            </Route>
            <Route path="/dashboard/msg/">
              <BackendMsg />
            </Route>
            <Route path="/dashboard/events/:id">
              <EditEvent />
            </Route>
            <Route path="/dashboard/events">
              <BackendEvents />
            </Route>
            <Route path="/dashboard/location">
              <BackendDiscount />
            </Route>
            <Route path="/dashboard/data">
              <BackendData />
            </Route>
          </Switch>
        </div>
      </div>
    </>
  )
}

export default BackendRouter
