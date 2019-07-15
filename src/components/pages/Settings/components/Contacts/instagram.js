import React from 'react'
import { Field } from 'react-final-form'

const Instagram = () => (
  <div>
    <label>Instagram</label>
    <Field name="contacts.instagram" component="input" placeholder="url" />
  </div>
)

export default Instagram
