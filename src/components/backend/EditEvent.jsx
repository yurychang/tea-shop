import React, { useEffect } from 'react'
import { Row, Col, Form as BsForm, Button } from 'react-bootstrap'
import styled from 'styled-components'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import FormErr from 'utils/FormErr'

import CKEditor from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

const BsControl = BsForm.Control
const BsCheck = BsForm.Check
const FileInput = styled(BsForm.Label)`
  display: block;
  width: 100%;
  height: 200px;
  border-radius: 6px;
  text-align: center;
  line-height: 200px;
  font-size: 2.5rem;
  color: #ffffffa4;
  background-color: rgb(189, 223, 189);
  background-position: center center;
  background-size: cover;
`

// function readURL(input) {
//   if (input.files && input.files[0]) {
//     var reader = new FileReader()
//     reader.onload = function(e) {
//       // $('.preview_img').attr('src', e.target.result);
//       $('.preview_img').css('background-image', `url('${e.target.result}')`)
//     }
//     reader.readAsDataURL(input.files[0])
//   }
// }

export default function EditEvent() {
  const formikConfig = {
    initialValues: {
      title: '',
      price: 0,
      location: '',
      isOpen: '1',
      content: '',
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Required'),
      location: Yup.string().required('Required'),
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      console.log(values)
      resetForm({})
      setSubmitting(false)
    },
  }

  return (
    <>
      <Formik {...formikConfig}>
        <Form className="">
          <BsForm.Group>
            <FileInput id="input-banner" className="preview_img">
              Add the banner image
              <Field
                as={BsControl}
                type="file"
                id="banner"
                name="banner"
                className="d-none"
              />
            </FileInput>
          </BsForm.Group>
          <Row>
            <Col md="6">
              <BsForm.Group>
                <BsForm.Label>Title</BsForm.Label>
                <FormErr name="title" />
                <Field as={BsControl} type="text" name="title" />
              </BsForm.Group>
            </Col>
            <Col md="6">
              <BsForm.Group>
                <BsForm.Label>price</BsForm.Label>
                <FormErr name="price" />
                <Field as={BsControl} type="number" name="price" min="0" />
              </BsForm.Group>
            </Col>
            <Col md="6">
              <BsForm.Group>
                <BsForm.Label>location</BsForm.Label>
                <FormErr name="location" />
                <Field as={BsControl} type="text" name="location" />
              </BsForm.Group>
            </Col>
            <Col md="6">
              <BsForm.Label>isOpen</BsForm.Label>
              <BsForm.Group className="d-flex">
                <Field
                  as={BsCheck}
                  type="radio"
                  id="open"
                  name="isOpen"
                  value="1"
                />
                <BsForm.Label htmlFor="open" className="mr-3">
                  開啟
                </BsForm.Label>
                <Field
                  as={BsCheck}
                  type="radio"
                  id="close"
                  name="isOpen"
                  value="0"
                />
                <BsForm.Label htmlFor="close">關閉</BsForm.Label>
              </BsForm.Group>
            </Col>
            <Col>
              <BsForm.Group>
                <BsForm.Label>content</BsForm.Label>
                <Field
                  as="textarea"
                  className="sy_form-control"
                  style={{ height: '100px' }}
                  name="note"
                />
              </BsForm.Group>
            </Col>
          </Row>
          <Button type="submit" variant="main">
            Submit
          </Button>
        </Form>
      </Formik>
      <div className="App">
        <h2>Using CKEditor 5 build in React</h2>
        <CKEditor
          editor={ClassicEditor}
          data="<p>Hello from CKEditor 5!</p>"
          onInit={editor => {
            // You can store the "editor" and use when it is needed.
            console.log('Editor is ready to use!', editor)
          }}
          onChange={(event, editor) => {
            const data = editor.getData()
            console.log({ event, editor, data })
          }}
          onBlur={(event, editor) => {
            console.log('Blur.', editor)
          }}
          onFocus={(event, editor) => {
            console.log('Focus.', editor)
          }}
        />
      </div>
    </>
  )
}
