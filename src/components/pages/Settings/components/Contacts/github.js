import React from 'react'
import { Field } from 'react-final-form'

const GitHub = () => (
  <div>
    <label>GitHub</label>
    <Field name="contacts.github" component="input" placeholder="url" />
  </div>
)

export default GitHub
