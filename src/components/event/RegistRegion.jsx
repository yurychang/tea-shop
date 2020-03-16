import React from 'react'
import RegistForm from './RegistForm'

export default function RegistRegion() {
  return (
    <div className="my-5 pl-lg-5 pt-7 border-lg-left border-secondary">
      <div className="d-flex mb-3">
        <span className="text-mainlight mr-2">預約</span>
        <h2 className="fs-lg">半日茶師小旅行</h2>
      </div>
      <div className="mb-4">
        <span className="mr-5">$500/人</span>
        <span>
          <i className="fas fa-map-marker-alt fa-sm mr-1" />
          南投竹山茶文化館
        </span>
      </div>
      <RegistForm />
    </div>
  )
}
