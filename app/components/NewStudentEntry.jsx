import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { alterStudentForm, submitStudentForm } from '../reducers/NewStudentEntry'


const mapStateToProps = ({ studentForm }) => ({ studentForm })

const mapDispatchToProps = dispatch => ({
  handleChange: event => {
    let alteration = {}
    alteration[event.target.name] = event.target.value
    dispatch(alterStudentForm(alteration))
  },
  handleSubmit: props => {
    return function(event) {
      event.preventDefault()
      console.log(props)
      dispatch(submitStudentForm({
        id: props.studentForm.id,
        firstName: props.studentForm.firstName,
        lastName: props.studentForm.lastName,
        gpa: props.studentForm.gpa,
        email: props.studentForm.email,
        campusId: props.studentForm.campusId
      }))
    }
  }
})

const NewStudentEntry = props => (
  <div id="new-student-entry">
    <form id="student-entry-form">
      Leave ID# blank to enroll new student, provide ID# to update existing student record
      <div> ID#
        <input
          value={props.studentForm.id}
          onChange={props.handleChange}
          className="form-control"
          name="id"
        />
      </div>
      <div> First name
        <input
          value={props.studentForm.firstName}
          onChange={props.handleChange}
          className="form-control"
          name="firstName"
        />
      </div>
      <div> Last name
        <input
          value={props.studentForm.lastName}
          onChange={props.handleChange}
          className="form-control"
          name="lastName"
        />
      </div>
      <div> GPA
        <input
          value={props.studentForm.gpa}
          onChange={props.handleChange}
          className="form-control"
          name="gpa"
        />
      </div>
      <div> Email
        <input
          value={props.studentForm.email}
          onChange={props.handleChange}
          className="form-control"
          name="email"
        />
      </div>
      <div> Campus#
      <input
          value={props.studentForm.campusId}
          onChange={props.handleChange}
          className="form-control"
          name="campusId"
        />
      </div>
      <button type="Submit" onClick={props.handleSubmit(props)}>Submit</button>
    </form>
  </div>
)

const NewStudentEntryContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(NewStudentEntry))

export default NewStudentEntryContainer
