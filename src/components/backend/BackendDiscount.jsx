import React from 'react'
import { Link } from 'react-router-dom'



function BackendDiscount() {


  return (
    <>
      <div className="content">
          <h3>折扣管理</h3>
          <hr />
            <div className="d-flex justify-content-end">
              <button  className="btn btn-primary mb-4 ">新增折扣</button>
            </div>


            <div className="card mb-4">
              <div className="card-header d-flex justify-content-between">
                <div className="account">折扣標題
            </div>

              </div>
              <div className="card-body d-flex justify-content-between align-items-center">

                <div className="Msg">
                  [03/10~03/20]紅茶九折
            </div>
                <button className="btn btn-main" >編輯折扣</button>

              </div>

            </div>
          </div>





    </>
  )
}

export default BackendDiscount