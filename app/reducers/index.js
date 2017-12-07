import { combineReducers } from 'redux'

import WinterJokes from './WinterJokes'
import campuses from './CampusList'
import students from './StudentList'

const rootReducer = combineReducers({
  jokeState: WinterJokes,
  campuses,
  students
})

// const initialState = {}

// const rootReducer = function(state = initialState, action) {
//   switch (action.type) {
//     default: return state
//   }
// }

export default rootReducer
