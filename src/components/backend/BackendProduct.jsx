import React from 'react'
import { Link } from 'react-router-dom'



function BackendProduct() {


        return (
        <>
                <div className="content col-10">
                    <h3>商品管理</h3>
                    <hr />

                        <ul className="nav mb-4">
                            <li className="nav-item">
                                <Link className="nav-link data-ma" to="#">全部商品</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">上架中</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">未上架</Link>
                            </li>
                        </ul>

                        <div className="order-area">
                            <div className="d-flex justify-content-end">
                                <button  className="btn btn-primary mb-2 ">新增商品</button>
                            </div>

                            <div className="d-flex justify-content-around mb-4">
                                <div className="card">
                                    <img className="" src="https://via.placeholder.com/250" alt="" />
                                        <div className="card-body">
                                            <h5 className="card-title">凍頂烏龍茶</h5>
                                            <p className="card-text">NTD 200</p>
                                            <Link to="#" className="btn btn-main">編輯商品</Link>
                                        </div>
            </div>
                                    <div className="card">
                                        <img className="" src="https://via.placeholder.com/250" alt="" />
                                            <div className="card-body">
                                                <h5 className="card-title">凍頂烏龍茶</h5>
                                                <p className="card-text">NTD 200</p>
                                                <Link to="#" className="btn btn-main">編輯商品</Link>
                                            </div>
            </div>
                                        <div className="card positon-relative">
                                            <img className="" src="https://via.placeholder.com/250" alt="" />
                                                <div className="card-body">
                                                    <h5 className="card-title">凍頂烏龍茶</h5>
                                                    <p className="card-text">NTD 200</p>
                                                    <Link to="#" className="btn btn-main">編輯商品</Link>
                                                </div>
                                                <div className="noShelves"></div>
                                                <div className="noShelvesText">未上架</div>
            </div>
                                        </div>

                                    </div>

                                </div>




        </>
    )
}

export default BackendProduct