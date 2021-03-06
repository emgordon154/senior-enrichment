import React from 'react'

import StudentList from '../StudentList'

const OrdinaryCampus = props => {
  let campus = props.campus
  return ( campus.students ?
    <div id="selected-campus">
      <h2 id="selected-campus-name">{campus.name}</h2>
      <p id="selected-campus-description">{campus.description}</p>
      {/* <ul>
        {campus.students.map(student => (
          <li key={student.id}>
            <div>{student.name}</div>
            <div>{student.gpa}</div>
          </li>
        ))}
      </ul> */}
      <StudentList campusId={campus.id} />
      {/* <StudentList filterByCampusId={campus.id} /> */}
    </div> : null
  )
}

export default OrdinaryCampus
