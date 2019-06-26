import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import database from '../firebase/firebase';

const ContactForm = ({
  errors,
  touched,
  isSubmitting
}) => {
  return (
    <Form>
      <div>
        { touched.name && errors.name && <p>{errors.name}</p> }
        <Field type="name" name="name" placeholder="Name" />
      </div>
      <div>
        { touched.email && errors.email && <p>{errors.email}</p> }
        <Field type="email" name="email" placeholder="Email" />
      </div>
      <div>
        { touched.message && errors.message && <p>{errors.message}</p> }
        <Field component="textarea" rows="5" type="text" name="message" placeholder="Message" />
      </div>
      <button disabled={isSubmitting} type="submit">{isSubmitting ? "Sending..." : "Submit"}</button>
    </Form>
  )
}

const FormikApp = withFormik({
  mapPropsToValues({ name, email, message }) {
    return {
      name: '',
      email: '',
      message: ''
    }
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required('Your name would be helpful!'),
    email: Yup.string().email().required('Include your email so I can get back to you!'),
    message: Yup.string().required('What message did you want to send?')
  }),

  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
      database.ref('messages').push(values)
      resetForm()
      setSubmitting(false)
      alert("message sent!")
  }
})(ContactForm)

export {FormikApp as default}