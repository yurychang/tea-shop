import React from 'react'
import { Link } from 'react-router-dom'




function VendorNav() {
        return (
            <>
                <div className="navCenter">
                    <nav className="mb-5 vendorNav">
                        <ul className="d-flex justify-content-between">
                            <li className="nav-item navColor"><Link to="/vendorindex/:id?">商品列表</Link></li>
                            <li className="nav-item"><Link to="/vendorabout/:id?">關於我們</Link></li>
                            <li className="nav-item"><Link to="/vendorevents/:id?">活動列表</Link></li>
                            <li className="nav-item"><Link to="/vendordiscount/:id?">折扣專區</Link></li>
                        </ul>
                    </nav>
                </div>
            </>
        )
    }

export default VendorNav