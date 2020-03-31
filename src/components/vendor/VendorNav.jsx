import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink, withRouter } from 'react-router-dom'





function VendorNav(props) {
    let vendorId= sessionStorage.getItem('vendorId')
    return (
        <>
            <div className="navCenter">
                <nav className="mb-5 vendorNav">
                    <ul className="d-flex justify-content-between ls_fron-nav">
                        <li className="nav-item"><NavLink className="ls_fron-nav" activeClassName="active" to={`/vendor/${vendorId}/index`}>商品列表</NavLink></li>
                        <li className="nav-item"><NavLink className="ls_fron-nav" activeClassName="active" to={`/vendor/${vendorId}/about`}>關於我們</NavLink></li>
                        <li className="nav-item"><NavLink className="ls_fron-nav" activeClassName="active" to={`/vendor/${vendorId}/events`}>活動列表</NavLink></li>
                        <li className="nav-item"><NavLink className="ls_fron-nav" activeClassName="active" to={`/vendor/${vendorId}/location`}>營業據點</NavLink></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default VendorNav