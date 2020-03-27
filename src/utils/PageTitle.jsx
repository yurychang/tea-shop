import React from 'react'

export default function PageTitle({ children, ...attr }) {
  return (
    <h1 className="mb-3 vertical-lg-rl h2 text-ff" {...attr}>
      {children}
    </h1>
  )
}
