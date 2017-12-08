import axios from 'axios'

const initialCampus = {}

const GOT_SELECTED_CAMPUS = 'GOT_SELECTED_CAMPUS'

const gotSelectedCampus = campus => ({
  type: GOT_SELECTED_CAMPUS,
  campus
})

export const getSelectedCampusFromServer = campusId => (
  dispatch => (
    axios.get(`/api/campus/${campusId}`)
    .then(res => res.data)
    .then(campus => dispatch(gotSelectedCampus(campus)))
    .catch(err => {
      console.log('uh oh lmao')
      console.error(err)
    })
  )
)

export default function reducer(campus = initialCampus, action) {
  switch (action.type) {
    case GOT_SELECTED_CAMPUS: return action.campus

    default: return campus
  }
}
