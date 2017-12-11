import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { alterCampusForm, submitCampusForm } from '../reducers/NewCampusEntry'


const mapStateToProps = ({ campusForm }) => ({ campusForm })

const mapDispatchToProps = dispatch => ({
  handleChange: event => {
    let alteration = {}
    alteration[event.target.name] = event.target.value
    dispatch(alterCampusForm(alteration))
  },
  handleSubmit: props => {
    return function(event) {
      event.preventDefault()
      console.log(props)
      dispatch(submitCampusForm({
        id: props.campusForm.id,
        name: props.campusForm.name,
        imageUrl: props.campusForm.imageUrl || '/img/earth-trans-640.png',
        description: props.campusForm.description
      }))
    }
  }
})

const NewCampusEntry = props => (
  <div id="new-campus-entry">
    <form id="campus-entry-form">
      <div> ID#
        <input
          value={props.campusForm.id}
          onChange={props.handleChange}
          className="form-control"
          name="id"
        />
      </div>
      <div> Name
        <input
          value={props.campusForm.name}
          onChange={props.handleChange}
          className="form-control"
          name="name"
        />
      </div>
      <div> Image URL
        <input
          value={props.campusForm.imageUrl}
          onChange={props.handleChange}
          className="form-control"
          name="imageUrl"
        />
      </div>
      <div> Description
        <input
          value={props.campusForm.description}
          onChange={props.handleChange}
          className="form-control"
          name="description"
        />
      </div>
      <button
        type="Submit"
        onClick={props.handleSubmit(props)}
      >Submit</button>
    </form>
  </div>
)

const NewCampusEntryContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(NewCampusEntry))

export default NewCampusEntryContainer
