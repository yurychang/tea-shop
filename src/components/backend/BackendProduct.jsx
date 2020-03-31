import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Figure from 'react-bootstrap/Figure'
import productCard from '../pj_event/productCard'

function BackendProduct() {

  const [productdata, setProductdata] = useState([])

  //取得商品列表
  async function getOrderFromServer() {
    const request = new Request('http://localhost:3333/vendor/getvendorproductlist', {
      method: 'GET',
      credentials: 'include',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    console.log('data', data);
    setProductdata(data)
    console.log('productdata', productdata)

  }

  useEffect(() => {
    getOrderFromServer()
  }, [])

//   const productli = (
//     <>
//       {productdata.map((value, index) => {
//         return (
//           <div className="card singleProduct mb-3 mr-2">
//             <div className="ls_p250">
//               <img className="" src={`http://localhost:3333/images/${value.img}`} alt="" />
//             </div>
//             <div className="card-body">
//             <h5 className="card-title">{value.title}</h5>
//             <p className="card-text">NTD {value.price}</p>
//             <Link to="#" className="btn btn-main">
//               編輯商品
//             </Link>
//           </div>
//           </div>
//   )
// })}
//     </>)



return (
  <>
    <div className="content">
      <h3>商品管理</h3>
      <hr />

      <ul className="nav mb-4">
        <li className="nav-item">
          <Link className="nav-link data-ma" to="#">
            全部商品
            </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">
            上架中
            </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">
            未上架
            </Link>
        </li>
      </ul>

      <div className="order-area">
        <div className="d-flex justify-content-end">
          <button className="btn btn-primary mb-2 ">新增商品</button>
        </div>

        <div className="d-flex justify-content mb-4 flex-wrap">

        <productCard />


        </div>
      </div>
    </div>
  </>
)
}

export default BackendProduct
