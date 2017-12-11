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

const DELETED_CAMPUS = 'DELETED_CAMPUS'

export const deletedCampus = campusId => ({
  type: DELETED_CAMPUS,
  campusId
})

export const deleteCampusOnServer = campusId => {
  return dispatch => {
    axios.delete(`/api/campus/${campusId}`)
    // .then(res => res.data)
    .then(() => dispatch(deletedCampus(campusId)))
    .then(() => dispatch(getCampusesFromServer()))
    .catch(err => {
      console.log('uh oh lmao')
      console.error(err)
    })
  }
}

const CAMPUS_CREATED = 'CAMPUS_CREATED'

export const campusCreated = createdCampus => ({
  type: CAMPUS_CREATED,
  createdCampus
})

const CAMPUS_UPDATED = 'CAMPUS_UPDATED'

export const campusUpdated = updatedCampus => ({
  type: CAMPUS_UPDATED,
  updatedCampus
})


export default function reducer(campuses = initialCampuses, action) {
  switch (action.type) {
    case GOT_CAMPUSES: return action.campuses

  case CAMPUS_CREATED:
    return campuses
              .concat(action.createdCampus)
                .sort((campusA, campusB) => campusA.id - campusB.id)

  case CAMPUS_UPDATED:
    let updatedCampusIndex = campuses.findIndex(
      campus => +campus.id === +action.updatedCampus.id)
    return campuses.slice(0, updatedCampusIndex)
            .concat(
              action.updatedCampus,
              campuses.slice(updatedCampusIndex + 1)
            )

  case DELETED_CAMPUS:
    return campuses
      .filter(campus => campus.id !== action.campusId)


    default: return campuses
  }
}
