import React from 'react'
import { Link } from 'react-router-dom'



function BackendEvents() {


    return (
        <>
            <div className="content col-10">
                <h3>活動管理</h3>
                <hr />

                <ul className="nav mb-4">
                    <li className="nav-item">
                        <Link className="nav-link active" to="#">全部活動</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">進行中活動</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">已過期活動</Link>
                    </li>
                </ul>

                <div className="card-header d-flex justify-content-between mb-4">
                    <div className="product-img">活動名稱</div>
                    <div className="order-price"></div>
                    <div className="order-status"></div>
                </div>

                <div className="card mb-4">
                    <div className="card-header d-flex justify-content-between">
                        <div className="account">半日體驗~小小製茶師</div>
                        <div className="order-number">活動編號:20200308001</div>
                    </div>
                    <div className="card-body d-flex justify-content-between align-items-center">
                        <div className="eventPreview">
                            <div className="figure">
                                <img className="" src="https://via.placeholder.com/200x150" alt="" />
                            </div>
                    讓12歲以下小朋友體驗製茶的過程...
                    </div>
                        <div>
                            <button className="btn btn-main mb-2 ">編輯活動</button>
                        </div>

                    </div>
                </div>


                <div className="card mb-4">
                    <div className="card-header d-flex justify-content-between">
                        <div className="account">半日體驗~小小製茶師</div>
                        <div className="order-number">活動編號:20200308001</div>
                    </div>
                    <div className="card-body d-flex justify-content-between align-items-center">
                        <div className="eventPreview">
                            <div className="figure">
                                <img className="" src="https://via.placeholder.com/200x150" alt="" />
                            </div>
                    讓12歲以下小朋友體驗製茶的過程...
                    </div>
                        <div>
                            <button className="btn btn-primary mb-2 ">編輯活動</button>
                        </div>

                    </div>


                    <div className="card mb-4">
                        <div className="card-header d-flex justify-content-between">
                            <div className="account">半日體驗~小小製茶師</div>
                            <div className="order-number">活動編號:20200308001</div>
                        </div>
                        <div className="card-body d-flex justify-content-between align-items-center">
                            <div className="eventPreview">
                                <div className="figure">
                                    <img className="" src="https://via.placeholder.com/200x150" alt="" />
                                </div>
                    讓12歲以下小朋友體驗製茶的過程...
                    </div>
                            <div className="timeOut">
                                已過期
                        </div>

                        </div>


                    </div>


                </div>

                </div>






        </>
    )
}

export default BackendEvents