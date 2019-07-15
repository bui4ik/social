import React from 'react'
import { Field } from 'react-final-form'

const Facebook = () => (
  <div>
    <label>Facebook</label>
    <Field name="contacts.facebook" component="input" placeholder="url" />
  </div>
)

export default Facebook
