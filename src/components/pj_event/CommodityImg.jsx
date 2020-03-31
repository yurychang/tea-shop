import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import img1 from '../../images/01.jpg'
import '../../styles/pj/_pj.css'

function CommodityImg(props) {
  const [product, setProduct] = useState([])
  const getproductid = Number(props.match.params.id)
  console.log(getproductid)

  async function getDataFromServer(props) {
    const request = new Request(
      'http://localhost:3333/product/get-single-product/' + getproductid,
      {
        method: 'GET',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'appliaction/json',
        }),
      }
    )
    const response = await fetch(request)
    const data = await response.json()
    console.log(data)
    setProduct(data)
  }

  useEffect(() => {
    getDataFromServer()
  }, [])

  console.log('product', product)
  console.log('product[0]', product[0])
  return (
    <>
      {product
        ? product.map((el, i) => {
            return (
              <>
                <div className="pj_card-img">
                  <img
                    src={`http://localhost:3333/images/product/${el.img}`}
                    className="card-img p-2 "
                    alt="..."
                  />
                </div>
                <div className="d-flex">
                  <img
                    src={`http://localhost:3333/images/product/${el.img}`}
                    className="pj_card-img-bottom p-2 col-md-3"
                    alt="..."
                  />
                  <img
                    src={`http://localhost:3333/images/product/${el.img}`}
                    className="pj_card-img-bottom p-2 col-md-3"
                    alt="..."
                  />
                  <img
                    src={`http://localhost:3333/images/product/${el.img}`}
                    className="pj_card-img-bottom p-2 col-md-3"
                    alt="..."
                  />
                  <img
                    src={`http://localhost:3333/images/product/${el.img}`}
                    className="pj_card-img-bottom p-2 col-md-3"
                    alt="..."
                  />
                </div>
              </>
            )
          })
        : ''}
    </>
  )
}
export default withRouter(CommodityImg)
