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
    <ul>
      {props.students.map(student => (
        <div key={student.id}>
          {student.name}
        </div>
      ))}
    </ul>
  </div>
)

const StudentListContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(StudentList))

export default StudentListContainer
