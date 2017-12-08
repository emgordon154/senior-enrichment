import axios from 'axios'

const initialCampuses = []

const GOT_CAMPUSES = 'GOT_CAMPUSES'

const gotCampuses = campuses => ({
  type: GOT_CAMPUSES,
  campuses
})

export const getCampusesFromServer = () => (
  dispatch => (
    axios.get('/api/campus')
      .then(res => res.data)
      .then(campuses => dispatch(gotCampuses(campuses)))
      .catch(err => {
        console.log('uh oh lmao')
        console.error(err)
      })
  )
)

export default function reducer(campuses = initialCampuses, action) {
  switch (action.type) {
    case GOT_CAMPUSES: return action.campuses

    default: return campuses
  }
}
