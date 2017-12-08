import { combineReducers } from 'redux'

import jokeState from './WinterJokes'
import campuses from './CampusList'
import campus from './CampusInfo'
import students from './StudentList'

const rootReducer = combineReducers({
  jokeState,
  campuses,
  campus,
  students
})

// const initialState = {}

// const rootReducer = function(state = initialState, action) {
//   switch (action.type) {
//     default: return state
//   }
// }

export default rootReducer
