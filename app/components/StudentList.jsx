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
      <button id="create-student-btn">
        Create new student
      </button>
    </div>
    <div id="student-table-container">
      <div id="student-table-col-names">
        {/* <div>ID # in database</div> */}
        <div>Name</div>
        <div>Campus</div>
        <div>GPA</div>
        <div>Email</div>
      </div>
      <div>
        <ul id="student-table-rows">
          {props.students.map(student => (
            <li key={student.id} className="student-table-row">
              <div className="student-table-cell student-name">{student.name}</div>
              <div className="student-table-cell student-campus">{student.campus.name}</div>
              <div className="student-table-cell student-gpa">{student.gpa}</div>
              <div className="student-table-cell student-email">{student.email}</div>
              <button className="delete-student-btn" id={`delete-student-${student.id}`}>
                Delete student
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
)

const StudentListContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(StudentList))

export default StudentListContainer
