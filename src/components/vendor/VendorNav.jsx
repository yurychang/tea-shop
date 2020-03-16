import React from 'react'
import { Link } from 'react-router-dom'




function VendorNav() {
        return (
            <>
                <div className="navCenter">
                    <nav className="mb-5 vendorNav">
                        <ul className="d-flex justify-content-between">
                            <li className="nav-item navColor"><Link to="/vendor/:id?/index">商品列表</Link></li>
                            <li className="nav-item"><Link to="/vendor/:id?/about">關於我們</Link></li>
                            <li className="nav-item"><Link to="/vendor/:id?/events">活動列表</Link></li>
                            <li className="nav-item"><Link to="/vendor/:id?/discount">折扣專區</Link></li>
                        </ul>
                    </nav>
                </div>
            </>
        )
    }

export default VendorNav