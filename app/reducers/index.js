import { combineReducers } from 'redux'

import WinterJokes from './WinterJokes'

const rootReducer = combineReducers({
  jokeState: WinterJokes,
})

// const initialState = {}

// const rootReducer = function(state = initialState, action) {
//   switch (action.type) {
//     default: return state
//   }
// }

export default rootReducer
