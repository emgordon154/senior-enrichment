import React from 'react'
import { connect } from 'react-redux'
import { getStudentsFromServer } from '../reducers/StudentList'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => {
  return { students: state.students }
}

const mapDispatchToProps = dispatch => {
  dispatch(getStudentsFromServer())
  return {}
}

const StudentList = props => (
  <div>
    <div id="student-list-ctrls">
      <button id="create-student-btn" />
    </div>
    <div id="student-table-container">
      <div id="student-table-col-names">
        <div>ID # in database</div>
        <div>Name</div>
        <div>Campus</div>
        <div>Email</div>
      </div>
      <div>
        <ul id="student-table-rows">
          {props.students.map(student => (
            <li key={student.id} className="student-table-row">
              <div>{student.name}</div>
              <div>{student.campus.name}</div>
              <div>{student.gpa}</div>
              <div>{student.email}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
)

const StudentListContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(StudentList))

export default StudentListContainer
