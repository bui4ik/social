import React from 'react'
import { Field } from 'react-final-form'

const AboutMe = () => (
  <div>
    <label>About me</label>
    <Field name="aboutMe" component="textarea" placeholder="About me" />
  </div>
)

export default AboutMe
