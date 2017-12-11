import { combineReducers } from 'redux'

import jokeState from './WinterJokes'
import campuses from './CampusList'
import campus from './CampusInfo'
import campusForm from './NewCampusEntry'
import students from './StudentList'
import student from './StudentInfo'
import studentForm from './NewStudentEntry'

const rootReducer = combineReducers({
  jokeState,
  campuses,
  campus,
  campusForm,
  students,
  student,
  studentForm
})

// const initialState = {}

// const rootReducer = function(state = initialState, action) {
//   switch (action.type) {
//     default: return state
//   }
// }

export default rootReducer
