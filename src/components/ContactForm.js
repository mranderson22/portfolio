import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import database from '../firebase/firebase';

const FormLayout = ({
  errors,
  touched,
  isSubmitting
}) => {
  return (
    <Form className="contactForm">
      <div className="inputField">
        { touched.name && errors.name && <p className="formError formError-first">{errors.name}</p> }
        <Field type="text" name="name" placeholder="Your Name" autoComplete="sdfsessdf" className="inputField__input inputField__input-first" />
      </div>
      <div className="inputField">
        { touched.email && errors.email && <p className="formError">{errors.email}</p> }
        <Field type="email" name="email" placeholder="Your E-mail" autoComplete="asdfsdfd" />
      </div>
      <div className="inputField">
        { touched.message && errors.message && <p className="formError formError-last">{errors.message}</p> }
        <Field component="textarea" rows="5" type="text" name="message" placeholder="Your Message" autoComplete="23wedfsdf" />
      </div>
      <button className="btn" disabled={isSubmitting} type="submit">{isSubmitting ? "Sent!" : "Get in Touch"}</button>
    </Form>
  )
}

const ContactForm = withFormik({
  mapPropsToValues({ name, email, message }) {
    return {
      name: '',
      email: '',
      message: ''
    }
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required('Your name would be helpful!'),
    email: Yup.string().email('A valid email it must be!').required('Include your email so I can get back to you!'),
    message: Yup.string().required('What message did you want to send!?')
  }),

  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
      
      database.ref('messages').push(values)
      resetForm()
      setSubmitting(true)
      setTimeout(() => {
        setSubmitting(false)
      }, 3000)
  }
})(FormLayout)

export {ContactForm as default}