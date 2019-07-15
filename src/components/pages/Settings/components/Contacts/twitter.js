import React from 'react'
import { Field } from 'react-final-form'

const Twitter = () => (
  <div>
    <label>Twitter</label>
    <Field name="contacts.twitter" component="input" placeholder="url" />
  </div>
)

export default Twitter
