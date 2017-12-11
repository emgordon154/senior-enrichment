import axios from 'axios'

import { campusCreated, campusUpdated } from './CampusList'

const initialFormFields = {
  id: '',
  name: '',
  imageUrl: '',
  description: ''
}

const CAMPUS_FORM_ALTERED = 'CAMPUS_FORM_ALTERED'

export const alterCampusForm = alteration => ({
  type: CAMPUS_FORM_ALTERED,
  alteration
})

const CAMPUS_FORM_SUBMITTED_SO_CLEAR_FORM = 'CAMPUS_FORM_SUBMITTED_SO_CLEAR_FORM'

const clearCampusForm = () => ({
  type: CAMPUS_FORM_SUBMITTED_SO_CLEAR_FORM
})

export const submitCampusForm = fields => (
  dispatch => (
    (fields.id
      ? axios.put(`/api/campus/${fields.id}`, fields)
          .then(res => res.data)
          .then(updatedCampus => dispatch(campusUpdated(updatedCampus)))
      : axios.post('/api/campus', fields)
          .then(res => res.data)
          .then(createdCampus => dispatch(campusCreated(createdCampus)))
          )
            .then(() => dispatch(clearCampusForm()))
            .catch(err => {
              console.log('uh oh lmao')
              console.error(err)
            })
  )
)

export default function reducer(formFields = initialFormFields, action) {
  switch (action.type) {
    case CAMPUS_FORM_ALTERED:
      return {
        ...formFields,
        ...action.alteration
      }

    case CAMPUS_FORM_SUBMITTED_SO_CLEAR_FORM:
      return initialFormFields

    default: return formFields
  }
}
