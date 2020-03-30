import React, { useEffect } from 'react'
import { Row, Col, Form as BsForm } from 'react-bootstrap'
import styled from 'styled-components'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import FormErr from 'utils/FormErr'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { postRegisterForm } from 'actions/events'
import KeyBtn from 'utils/KeyBtn'

// const SubmitBtn = styled.button.attrs(props => ({
//   className: 'link-btn',
// }))`
//   display: inline;
//   align-self: flex-end;
//   @media (max-width: 767.98px) {
//     width: 100%;
//     display: block;
//   }
// `

const SubmitBtn = styled(KeyBtn)`
  @media (max-width: 767.98px) {
    width: 100%;
    display: block;
  }
`

function RegistForm({ id, title, price, location, postRegisterForm }) {
  const formikConfig = {
    initialValues: {
      name: '',
      phone: '',
      email: '',
      date: '',
      time: '',
      num: '',
      note: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      phone: Yup.number()
        .typeError('not a phone number')
        .required('required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      date: Yup.date()
        .required('Required')
        .min(Date(), 'before'),
      num: Yup.number()
        .typeError('NaN')
        .required('required')
        .min(1, 'too small'),
      time: Yup.string().required('required'),
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      values.eId = id
      postRegisterForm(values)
      resetForm({})
      setSubmitting(false)
    },
  }

  return (
    <>
      <div className="my-5 pl-lg-5 pt-7 border-lg-left border-secondary">
        <div className="d-flex mb-3">
          <span className="text-mainlight mr-2">預約</span>
          <h2 className="fs-lg">{title}</h2>
        </div>
        <div className="mb-4">
          <span className="mr-5">${price}/人</span>
          <span>
            <i className="fas fa-map-marker-alt fa-sm mr-1" />
            {location}
          </span>
        </div>
        <Formik {...formikConfig}>
          <Form id="registForm">
            <BsForm.Group bsPrefix="sy_form-group">
              <label htmlFor="name">聯絡人：</label>
              <FormErr name="name"></FormErr>
              <Field name="name" type="text" className="sy_form-control" />
            </BsForm.Group>
            <Row>
              <Col md="4">
                <BsForm.Group bsPrefix="sy_form-group">
                  <label htmlFor="phone">連絡電話：</label>
                  <FormErr name="phone"></FormErr>
                  <Field name="phone" type="text" className="sy_form-control" />
                </BsForm.Group>
              </Col>
              <Col md="8">
                <BsForm.Group bsPrefix="sy_form-group">
                  <label htmlFor="email">E-mail：</label>
                  <FormErr name="email" />
                  <Field
                    name="email"
                    type="email"
                    className="sy_form-control"
                  />
                </BsForm.Group>
              </Col>
            </Row>
            <Row>
              <Col sm="4">
                <BsForm.Group bsPrefix="sy_form-group">
                  <label htmlFor="date">日期：</label>
                  <FormErr name="date" />
                  <Field type="date" name="date" className="sy_form-control" />
                </BsForm.Group>
              </Col>
              <Col sm="4">
                <BsForm.Group bsPrefix="sy_form-group">
                  <label htmlFor="time">時間：</label>
                  <FormErr name="time" />
                  <Field type="time" name="time" className="sy_form-control" />
                </BsForm.Group>
              </Col>
              <Col sm="4">
                <BsForm.Group bsPrefix="sy_form-group">
                  <label htmlFor="num">人數：</label>
                  <FormErr name="num" />
                  <Field name="num" type="number" className="sy_form-control" />
                </BsForm.Group>
              </Col>
            </Row>
            <BsForm.Group
              bsPrefix="sy_form-group"
              className="d-md-flex mt-md-3"
            >
              <label htmlFor="num">備註：</label>
              <Field
                as="textarea"
                className="sy_form-control"
                style={{ height: '100px' }}
                name="note"
              />
              <SubmitBtn
                type="submit"
                className="align-self-end ml-md-4 mt-2 fs-sm"
              >
                Submit
              </SubmitBtn>
            </BsForm.Group>
          </Form>
        </Formik>
      </div>
    </>
  )
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ postRegisterForm }, dispatch)
}

export default connect(null, mapDispatchToProps)(RegistForm)
