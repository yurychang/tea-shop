import React from 'react'
import CategorySec from "./CategorySec";

export default function Sections({ ...attrs }) {
  return <div { ...attrs }>
    <CategorySec />
  </div>
}
