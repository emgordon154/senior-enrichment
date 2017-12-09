// This file is the only component that ends in .js
// because i'm lazy and don't want to rewrite my imports
// of './CampusInfo' to './CampusInfo/index.jsx' lmao

import React from 'react'
import { connect } from 'react-redux'
import { getSelectedCampusFromServer } from '../../reducers/CampusInfo'
import { withRouter } from 'react-router-dom'
import OrdinaryCampus from './OrdinaryCampus'

const mapStateToProps = state => {
  return { campus: state.campus }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  dispatch(getSelectedCampusFromServer(ownProps.match.params.campusId))
  return {}
}

const CampusInfo = props => {
  return OrdinaryCampus(props)
}

const CampusInfoContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(CampusInfo))

export default CampusInfoContainer
