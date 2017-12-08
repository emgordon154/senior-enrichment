import React from 'react'
import { connect } from 'react-redux'
import { getSelectedCampusFromServer } from '../reducers/CampusInfo'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => {
  return { campus: state.campus }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  dispatch(getSelectedCampusFromServer(ownProps.match.params.campusId))
  return {}
}

const CampusInfo = props => {
  let campus = props.campus
  return ( campus.students ?
    <div id="selected-campus">
      <h2 id="selected-campus-name">{campus.name}</h2>
      <p id="selected-campus-description">{campus.description}</p>
      <ul>
        {campus.students.map(student => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>
    </div> : null
  )
}

const CampusInfoContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(CampusInfo))

export default CampusInfoContainer
