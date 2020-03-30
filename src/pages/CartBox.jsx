import React, { useState, useEffect } from 'react'
import img1 from '../images/01.jpg'

function CartBox(props) {
  const [shoppingBox, setShoppingBox] = useState([])

  // // 注意資料格式要設定，伺服器才知道是json格式
  // async function postDataToServer() {
  //   // 開啟載入指示

  //   const request = new Request(
  //     'http://localhost:3333/product/post-shoppingCart',
  //     {
  //       method: 'POST',
  //       body: 'shoppingCart.memberId, shoppingCart.teaId, shoppingCart.status',
  //       headers: new Headers({
  //         Accept: 'application/json',
  //         'Content-Type': 'appliaction/json',
  //       }),
  //     }
  //   )

  //   const response = await fetch(request)
  //   const data = await response.json()
  //   // 設定資料
  //   setShoppingBox(data)
  //   // return data
  // }
  // // 一開始就會開始載入資料
  // useEffect(() => {
  //   postDataToServer()
  // }, [])

  // console.log('shoppingBox', shoppingBox)
  return (
    <>
      <div className="pj_card-body1">
        <div className="pj_card-box1">
          <h5>最近加入商品</h5>
          <div className="d-flex pj_card-font2">
            <img className="pj_recommend-img" src={img1} alt="" />
            <div>
              <p className="p-2">
                【 冷泡茶精選 】 台灣茶 ‧ 綜合茶包組 - 外出單人瓶( 600ml )
                茶包3gx4枚
              </p>
              <div className="d-flex pj_box-font2">
                <p style={{ marginRight: '10px' }}>NT320</p>
                <p>刪除</p>
              </div>
            </div>
          </div>

          <div className="d-flex pj_card-font2">
            <img className="pj_recommend-img" src={img1} alt="" />
            <div>
              <p className="p-2">
                【 冷泡茶精選 】 台灣茶 ‧ 綜合茶包組 - 外出單人瓶( 600ml )
                茶包3gx4枚
              </p>
              <div className="d-flex pj_box-font2">
                <p style={{ marginRight: '10px' }}>NT320</p>
                <p>刪除</p>
              </div>
            </div>
          </div>

          <div className="d-flex pj_card-font2">
            <img className="pj_recommend-img" src={img1} alt="" />
            <div>
              <p className="p-2">
                【 冷泡茶精選 】 台灣茶 ‧ 綜合茶包組 - 外出單人瓶( 600ml )
                茶包3gx4枚
              </p>
              <div className="d-flex pj_box-font2">
                <p style={{ marginRight: '10px' }}>NT320</p>
                <p>刪除</p>
              </div>
            </div>
          </div>

          <div className="d-flex pj_card-font2">
            <img className="pj_recommend-img" src={img1} alt="" />
            <div>
              <p className="p-2">
                【 冷泡茶精選 】 台灣茶 ‧ 綜合茶包組 - 外出單人瓶( 600ml )
                茶包3gx4枚
              </p>
              <div className="d-flex pj_box-font2">
                <p style={{ marginRight: '10px' }}>NT320</p>
                <p>刪除</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default CartBox
