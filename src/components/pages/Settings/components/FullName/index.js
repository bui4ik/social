import React from 'react'
import { Field } from 'react-final-form'

const FullName = () => (
  <div>
    <label>Full Name</label>
    <Field
      name="fullName"
      component="input"
      type="text"
      placeholder="Full Name"
    />
  </div>
)

export default FullName
