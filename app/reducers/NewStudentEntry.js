import axios from 'axios'

import { studentCreated, studentUpdated } from './StudentList'

const initialFormFields = {
  id: '',
  firstName: '',
  lastName: '',
  gpa: '',
  email: '',
  campusId: ''
}

const STUDENT_FORM_ALTERED = 'STUDENT_FORM_ALTERED'

export const alterStudentForm = alteration => ({
  type: STUDENT_FORM_ALTERED,
  alteration
})

const STUDENT_FORM_SUBMITTED_SO_CLEAR_FORM = 'STUDENT_FORM_SUBMITTED_SO_CLEAR_FORM'

const clearStudentForm = () => ({
  type: STUDENT_FORM_SUBMITTED_SO_CLEAR_FORM
})

export const submitStudentForm = fields => (
  dispatch => (
    (fields.id
      ? axios.put(`/api/student/${fields.id}`, fields)
          .then(res => res.data)
          .then(updatedStudent => dispatch(studentUpdated(updatedStudent)))
      : axios.post('/api/student', fields)
          .then(res => res.data)
          .then(createdStudent => dispatch(studentCreated(createdStudent)))
          )
            .then(() => dispatch(clearStudentForm()))
            .catch(err => {
              console.log('uh oh lmao')
              console.error(err)
            })
  )
)

export default function reducer(formFields = initialFormFields, action) {
  switch (action.type) {


    case STUDENT_FORM_ALTERED:
      return {
        ...formFields,
        ...action.alteration
      }

    case STUDENT_FORM_SUBMITTED_SO_CLEAR_FORM:
      return initialFormFields

    default: return formFields
  }
}
