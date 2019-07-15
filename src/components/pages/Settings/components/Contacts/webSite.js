import React from 'react'
import { Field } from 'react-final-form'

const WebSite = () => (
  <div>
    <label>Website</label>
    <Field name="contacts.website" component="input" placeholder="url" />
  </div>
)

export default WebSite
