import React from 'react'

import img1 from '../../images/01.jpg'
import '../../styles/pj/_pj.css'

function CommodityImg({ ...attrs }) {
  return (
    <>
      <div className="pj_card-img">
        <img src={img1} className="card-img p-2 " alt="..." />
      </div>
      <div className="d-flex">
        <img src={img1} className="pj_card-img-bottom p-2 col-md-3" alt="..." />
        <img src={img1} className="pj_card-img-bottom p-2 col-md-3" alt="..." />
        <img src={img1} className="pj_card-img-bottom p-2 col-md-3" alt="..." />
        <img src={img1} className="pj_card-img-bottom p-2 col-md-3" alt="..." />
      </div>
    </>
  )
}
export default CommodityImg
