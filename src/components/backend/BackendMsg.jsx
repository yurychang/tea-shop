import React from 'react'
import { Link } from 'react-router-dom'



function BackendMsg() {


    return (
        <>
            <div className="content col-10">
            <h3>訊息管理</h3>
      <hr />
      <div class="d-flex justify-content-end">
        <button  class="btn btn-primary mb-2 ">新增推播訊息</button>
      </div>

      <div class="msgArea">


      <div class="card mb-4">
        <div class="card-header d-flex justify-content-between">
          <div class="account">訊息標題：
          </div>

        </div>
        <div class="card-body d-flex justify-content-between align-items-center">

          <div class="Msg">
            好茶推廣!!!限時一個禮拜紅茶9折起!!!
          </div>
          <button class="btn btn-primary" onclick="">編輯訊息</button>

        </div>

        </div>
      </div>

      <div class="card mb-4">
        <div class="card-header d-flex justify-content-between">
          <div class="account">訊息標題：
          </div>

        </div>
        <div class="card-body d-flex justify-content-between align-items-center">

          <div class="Msg">
            好茶推廣!!!限時一個禮拜紅茶9折起!!!
          </div>
         <div>已推播</div>

        </div>

        </div>
      </div>







        </>
    )
}

export default BackendMsg