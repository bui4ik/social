import React from 'react'
import { Field } from 'react-final-form'

const YouTube = () => (
  <div>
    <label>Youtube</label>
    <Field name="contacts.youtube" component="input" placeholder="url" />
  </div>
)

export default YouTube
