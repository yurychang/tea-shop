import React, { useState, useEffect } from 'react'
import CommodityImg from '../components/pj_event/CommodityImg'
import CommoditInformation from '../components/pj_event/CommoditInformation'
import ProductReviews from '../components/pj_event/ProductReviews'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Commodity(props) {
  const [product, setProduct] = useState([])
  const getproductid = Number(props.match.params.id)

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

  return (
    <>
      <div className="container pj_container py-4">
        <div className="mb-4">
          <div className="row">
            <div className="col-md-6">
              <CommodityImg />
            </div>
            <div className="col-md-6">
              <CommoditInformation
                product={{ ...product[0], id: getproductid }}
              />
            </div>
          </div>
        </div>
        <ProductReviews />
      </div>
    </>
  )
}
export default withRouter(Commodity)
