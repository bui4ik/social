import React from 'react'
import { Field } from 'react-final-form'

const LookingForAJob = () => (
  <div>
    <label>Looking for a job</label>
    <Field name="lookingForAJob" component="input" type="checkbox" />
  </div>
)

export default LookingForAJob
