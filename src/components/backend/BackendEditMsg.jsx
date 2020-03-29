import React from 'react'
import { Link } from 'react-router-dom'



function BackendProduct() {


    return (
        <>


            <div className="content">
                <h3>訊息管理</h3>
                <hr />
                <h5 className="text-center">編輯訊息</h5>
                <div className="d-flex justify-content-end">
                    <Link className="btn btn-primary mb-2" to="/dashboard/msg">回上頁</Link>
                </div>

                <form>
                    <div className="form-group">
                        <label>訊息標題</label>
                        <input type="text" className="form-control" required/>
                    </div>

                    <div className="mb-3">
                        <label for="validationTextarea">訊息內容</label>
                        <textarea className="form-control" id="validationTextarea" placeholder="" required />
                    </div>

                    <button type="submit" className="btn btn-main col-3 mb-3">修改訊息</button>
                </form>








            </div>







        </>
    )
}

export default BackendProduct