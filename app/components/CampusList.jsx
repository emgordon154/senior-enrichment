import React from 'react'
import { connect } from 'react-redux'
import { getCampusesFromServer, deleteCampusOnServer } from '../reducers/CampusList'
import { withRouter, Link } from 'react-router-dom'

import NewCampusEntry from './NewCampusEntry'

// import SpaceMusic from './SpaceMusic'

const mapStateToProps = state => {
  return { campuses: state.campuses }
}

const mapDispatchToProps = (dispatch) => {
  dispatch(getCampusesFromServer())
  return {
    handleDeleteClick: event => {
      console.log(event.target)
      const campusId = event.target.id.split('-')[2]
      dispatch(deleteCampusOnServer(campusId))
    }
  }
}

const CampusList = props => (
  <div>
    <img src="/img/space.jpg" id="space-img" />
    <ul id="campus-list">
        {props.campuses.map(campus => (
        <li key={campus.id} className="campus-list-element">
          <Link to={`/campus/${campus.id}`} className="link-to-campus" >
            <img src={campus.imageUrl} />
            <h2>{campus.name}</h2>
          </Link>
          {/* <button 
            className="delete-campus-btn"
            id={`delete-campus-${campus.id}`}
            onClick={props.handleDeleteClick}
          > Annihilate celestial body??? 
          </button> */}
        </li>
        ))}
    </ul>
    <NewCampusEntry />
  </div>
)

const CampusListContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(CampusList))

export default CampusListContainer

// class CampusList extends React.Component {
//   constructor (props) {
//     super(props)
//   }

//   componentDidMount() {
//     let canvas = document.getElementById("space-canvas");
//     let ctx = canvas.getContext("2d");
//     ctx.fillStyle = "#000000";
//     ctx.fillRect(0,0,800,600);

//     props.campuses.forEach(campus => {

//     })
//   }

//   render () {
//     return (
//       <div>
//         <canvas id="space-canvas" height="600" width="800"/>
//       </div>
//     )
//   }
// }
