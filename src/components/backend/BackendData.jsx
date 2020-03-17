import React from 'react'
import Figure from 'react-bootstrap'


function BackendData() {


    return (
        <>
            <div className="content col-10">
                <h3>資料管理</h3>
                <hr />
                <form className="form-data mb-5">
                              <div className="data-area d-flex justify-content-between">

                               <div className="form-area col-5">

                                <div className="form-group">
                                    <label>廠商名稱</label>
                                    <input type="text" className="form-control" placeholder=""/>
                                 </div>

                            <div className="form-group">
                                <label>E-mail</label>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="form-group">
                                    <label>地址</label>
                                    <input type="text" className="form-control" />
                            </div>

                            <div className="form-group">
                                <label>手機號碼</label>
                                <input type="text" className="form-control" />
                            </div>

                            </div>



                            <div className="img-area col-5">
                            <div className="figure">
                            <img className="figure-img img-fluid rounded" src="https://via.placeholder.com/300" alt="" />
                            </div>
                            <input type="file" />
                            </div>
                            </div>



                                <div className="mt-5 mb-5">
                                    <label for="validationTextarea">關於商店</label>
                                    <textarea className="form-control" value={"您好，歡迎來到${vendorName}的商店，希望我們提供的商品您會喜歡!"} placeholder="" required />

                                </div>
                                <button type="submit" className="btn btn-main col-3">更新</button>
                 </form>


                </div>


        </>
    )
}

export default BackendData