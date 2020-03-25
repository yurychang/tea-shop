import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'





function VendorNav() {
    return (
        <>
            <div className="navCenter">
                <nav className="mb-5 vendorNav">
                    <ul className="d-flex justify-content-between ls_fron-nav">
                        <li className="nav-item"><NavLink  className="ls_fron-nav" activeClassName="active" to="/vendor/index">商品列表</NavLink></li>
                        <li className="nav-item"><NavLink className="ls_fron-nav"  activeClassName="active" to="/vendor/about">關於我們</NavLink></li>
                        <li className="nav-item"><NavLink className="ls_fron-nav"  activeClassName="active" to="/vendor/events">活動列表</NavLink></li>
                        <li className="nav-item"><NavLink className="ls_fron-nav"  activeClassName="active" to="/vendor/discount">折扣專區</NavLink></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default VendorNav