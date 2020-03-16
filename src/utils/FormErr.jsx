import React from 'react'
import { ErrorMessage } from 'formik'

export default function FormErr({ name, ...attrs }) {
  return (
    <ErrorMessage
      name={name}
      render={msg => (
        <span className="sy_form-err" {...attrs}>
          {msg}
        </span>
      )}
    ></ErrorMessage>
  )
}
