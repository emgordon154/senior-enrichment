import { combineReducers } from 'redux'

import jokeState from './WinterJokes'
import campuses from './CampusList'
import campus from './CampusInfo'
import students from './StudentList'
import student from './StudentInfo'

const rootReducer = combineReducers({
  jokeState,
  campuses,
  campus,
  students,
  student
})

// const initialState = {}

// const rootReducer = function(state = initialState, action) {
//   switch (action.type) {
//     default: return state
//   }
// }

export default rootReducer
