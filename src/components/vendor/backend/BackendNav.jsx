import React from 'react'
import { Link } from 'react-router-dom'





function BackendNav() {
    return (
        <>
            <div className=" mr-4">
                <ul className="">
                    <li className="nav-item mt-3"><Link className="nav-link pb-4 " to="">訂單管理</Link></li>
                    <li className="nav-item mt-3"><Link className="nav-link pb-4 " to=".">商品管理</Link></li>
                    <li className="nav-item mt-3"><Link className="nav-link pb-4" to=".">訊息管理</Link></li>
                    <li className="nav-item mt-3"><Link className="nav-link pb-4" to="./">活動管理</Link></li>
                    <li className="nav-item mt-3"><Link className="nav-link pb-4" to="">折扣管理</Link></li>
                    <li className="nav-item mt-3"><Link className="nav-link pb-4" to="./">資料管理</Link></li>
                </ul>
            </div>

        </>
    )
}

export default BackendNav