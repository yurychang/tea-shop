import React from 'react'
import { NavLink } from 'react-router-dom'





function BackendNav() {
    return (
        <>
            <div className="ls_backend-nav mr-4">
                
                <ul className="">
                    <li className="list-item mt-3"><NavLink className="nav-link pb-2 ls_backend-nav" activeClassName="active" to="/dashboard/order/:orderid?">訂單管理</NavLink></li>
                    <li className="nav-item mt-3"><NavLink className="nav-link pb-2 ls_backend-nav" activeClassName="active" to="/dashboard/product/:productid?">商品管理</NavLink></li>
                    <li className="nav-item mt-3"><NavLink className="nav-link pb-2 ls_backend-nav" activeClassName="active" to="/dashboard/msg/:msgid?">訊息管理</NavLink></li>
                    <li className="nav-item mt-3"><NavLink className="nav-link pb-2 ls_backend-nav" activeClassName="active" to="/dashboard/events/:eventid?">活動管理</NavLink></li>
                    <li className="nav-item mt-3"><NavLink className="nav-link pb-2 ls_backend-nav" activeClassName="active" to="/dashboard/discount/:discountid?">折扣管理</NavLink></li>
                    <li className="nav-item mt-3"><NavLink className="nav-link pb-2 ls_backend-nav" activeClassName="active" to="/dashboard/data">資料管理</NavLink></li>
                </ul>
            </div>

        </>
    )
}

export default BackendNav