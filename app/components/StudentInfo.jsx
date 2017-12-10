import React from 'react'

import { connect } from 'react-redux'
import { getSelectedStudentFromServer } from '../reducers/StudentInfo'
import { withRouter, Link } from 'react-router-dom'

const mapStateToProps = state => {
  return { student: state.student }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  dispatch(getSelectedStudentFromServer(ownProps.match.params.studentId))
  return {}
}


const StudentInfo = props => {
  let student = props.student
  return ( student.id ?
    <div id="selected-student">
      <h2 id="selected-student-name">{student.name}</h2>
      <h2 id="selected-student-gpa">GPA: {student.gpa}</h2>
      <h2 id="selected-student-email">Email: {student.email}</h2>
      <Link to={`/campus/${student.campus.id}`} className="link-to-campus" >
        <img src={student.campus.imageUrl} id="selected-student-campus-pic" />
        <h2>{student.campus.name}</h2>
      </Link>
    </div> : null
  )
}

const StudentInfoContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(StudentInfo))

export default StudentInfoContainer
