import React from 'react'
import { connect } from 'react-redux'
import { getStudentsFromServer, deleteStudentOnServer } from '../reducers/StudentList'
import { withRouter, Link } from 'react-router-dom'

const mapStateToProps = state => (
  // ownProps.students
  //   ? { students: ownProps.students }
  //   :
  { students: state.students }
)

const mapDispatchToProps = (dispatch, ownProps) => {
  if (!ownProps.students) dispatch(getStudentsFromServer())
  return {
    handleDeleteClick: event => {
      console.log(event.target)
      const studentId = event.target.id.split('-')[2]
      dispatch(deleteStudentOnServer(studentId))
    }
  }
}

const StudentList = props => (
  props.students && <div>
    <div id="student-list-ctrls">
      <button id="create-student-btn">
        Create new student
      </button>
    </div>
    <div id="student-table-container">
      <div id="student-table-col-names">
        {/* <div>ID # in database</div> */}
        <div>Name</div>
        {props.students.some(student => student.campus) && <div>Campus</div>}
        <div>GPA</div>
        <div>Email</div>
      </div>
      <div>
        <ul id="student-table-rows">
          {(props.campusId
              ? props.students.filter(student => student.campusId === props.campusId)
              : props.students
          )
            .map(student => (
              <li key={student.id} className="student-table-row">
                <Link
                  to= {`/student/${student.id}`}
                  className="student-table-cell student-name">
                >
                  {student.name}
                </Link>
                {student.campus && <Link
                    to={`/campus/${student.campus.id}`}
                    className="student-table-cell student-campus"
                  >
                    {student.campus.name}
                  </Link>
                }
                <div className="student-table-cell student-gpa">{student.gpa}</div>
                <div className="student-table-cell student-email">{student.email}</div>
                <button
                  className="delete-student-btn"
                  id={`delete-student-${student.id}`}
                  onClick={props.handleDeleteClick}
                >
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
