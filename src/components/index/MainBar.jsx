import React, { useState } from 'react'

import MainBarNav from './MainBarNav'
import MainBarContent from './MainBarContent'

export default function MainBar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div className={`sy_main-bar ${isOpen ? 'active' : ''}`}>
        <MainBarNav isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        {isOpen ? (
          <MainBarContent
            onClick={() => {
              console.log('onclick')
              setIsOpen(!isOpen)
            }}
          />
        ) : (
          ''
        )}
      </div>
    </>
  )
}
