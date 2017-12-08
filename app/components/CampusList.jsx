import React from 'react'
import { connect } from 'react-redux'
import { getCampusesFromServer } from '../reducers/CampusList'
import { withRouter, Link } from 'react-router-dom'

const mapStateToProps = state => {
  return { campuses: state.campuses }
}

const mapDispatchToProps = (dispatch) => {
  dispatch(getCampusesFromServer())
  return {}
}

const CampusList = props => (
  <div id="campuses">
    <ul id="campuses-list">
      {props.campuses.map(campus => (
        <Link to={`/campus/${campus.id}`} key={campus.id} className="campus-list-item">
          <img src="/img/earth.jpg" />
          <h2>{campus.name}</h2>
        </Link>
      ))}
    </ul>
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
