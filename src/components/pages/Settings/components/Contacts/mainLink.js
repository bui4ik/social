import React from 'react'
import { Field } from 'react-final-form'

const MainLink = () => (
  <div>
    <label>Main Link</label>
    <Field name="contacts.mainLink" component="input" placeholder="url" />
  </div>
)

export default MainLink
