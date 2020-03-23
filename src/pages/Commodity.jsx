import React, { useState, useEffect } from 'react'
import CommodityImg from '../components/pj_event/CommodityImg'
import CommoditInformation from '../components/pj_event/CommoditInformation'
import ProductReviews from '../components/pj_event/ProductReviews'

function Commodity({ ...attrs }) {
  const [total, setTotal] = useState([])

  async function getDataFromServer() {
    // 開啟載入指示
    // setDataLoading(true)

    const request = new Request('http://localhost:3333/product/try-get', {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    // 設定資料
    setTotal(data)
    // return data
  }
  // 一開始就會開始載入資料
  useEffect(() => {
    getDataFromServer()
  }, [])

  console.log('total', total)

  return (
    <>
      <div className="container pj_container py-4">
        <div className="mb-4">
          <div className="row">
            <div className="col-md-6">
              <CommodityImg />
            </div>
            <div className="col-md-6">
              <CommoditInformation />
            </div>
          </div>
        </div>
        <ProductReviews />
      </div>
    </>
  )
}
export default Commodity
