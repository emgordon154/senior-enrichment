import axios from 'axios'

import { campusCreated, campusUpdated } from './CampusList'

const initialFormFields = {
  name: '',
  imageUrl: '',
  description: ''
}

const CAMPUS_FORM_ALTERED = 'CAMPUS_FORM_ALTERED'

export const alterCampusForm = fields => ({
  type: CAMPUS_FORM_ALTERED,
  fields
})

const CAMPUS_FORM_SUBMITTED_SO_CLEAR_FORM = 'CAMPUS_FORM_SUBMITTED_SO_CLEAR_FORM'

const clearCampusForm = () => ({
  type: CAMPUS_FORM_SUBMITTED_SO_CLEAR_FORM
})

// see NewStudentEntry for a DRYer (but less readable?) version
export const submitCampusForm = fields => (
  fields.id
  ? dispatch => (
      axios.put(`/api/campus/${fields.id}`, fields)
        .then(res => res.data)
        .then(updatedCampus => dispatch(campusUpdated(updatedCampus)))
        .then(() => dispatch(clearCampusForm()))
        .catch(err => {
          console.log('uh oh lmao')
          console.error(err)
        })
  )
  : dispatch => (
      axios.post('/api/campus', fields)
        .then(res => res.data)
        .then(createdCampus => dispatch(campusCreated(createdCampus)))
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
      return {...action.fields}

    case CAMPUS_FORM_SUBMITTED_SO_CLEAR_FORM:
      return initialFormFields

    default: return formFields
  }
}
