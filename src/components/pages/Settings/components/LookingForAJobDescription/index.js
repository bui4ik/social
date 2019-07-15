import React from 'react'
import { Field } from 'react-final-form'

const LookingForAJobDescription = () => (
  <div>
    <label>Looking for a job description</label>
    <Field
      name="lookingForAJobDescription"
      component="textarea"
      placeholder="Description"
    />
  </div>
)

export default LookingForAJobDescription
