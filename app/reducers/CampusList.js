import axios from 'axios'

const initialCampuses = []

const GOT_CAMPUSES = 'GOT_CAMPUSES'

const gotCampuses = campuses => ({
  type: GOT_CAMPUSES,
  campuses
})

export const getCampusesFromServer = () => {
  return dispatch => {
    axios.get('/campus')
      .then(res => res.data)
      .then(campuses => dispatch(gotCampuses(campuses)))
  }
}

export default function reducer(campuses = initialCampuses, action) {
  switch (action.type) {

    default: return campuses
  }
}
