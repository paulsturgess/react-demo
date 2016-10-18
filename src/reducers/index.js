// Reducers determine how the application's state changes in response to an action
// Never perform side effects like API calls and routing transitions
// Never mutate the data

// combineReducers generates a function that calls your reducers with the
// slices of state selected according to their keys
// It combines their results and returns a single object

import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
  todos,
  visibilityFilter
})

export default todoApp
