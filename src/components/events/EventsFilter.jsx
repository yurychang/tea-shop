import React from 'react'
import RegionAxis from './RegionAxis'

export default function EventsFilter({ ...attrs }) {
  return (
    <section {...attrs}>
      <RegionAxis />
    </section>
  )
}
