import React from 'react'
import CategorySec from "./CategorySec";

export default function SecMaker({ ...others }) {
  return <div { ...others }>
    <CategorySec />
  </div>
}
