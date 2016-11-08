// A reducer is a pure function that takes the previous state and
// an action, and returns the next state
import undoable, { distinctState } from 'redux-undo'

export const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      // action id is the todo id to be toggled
      if (state.id !== action.id) {
        return state
      }

      return {
        ...state, // spread attribute (copies the existing state array)
        completed: !state.completed // flip the completed attribute for the todo
      }
    default:
      return state
  }
}

export const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state, // spread attribute (copies the existing state array)
        todo(undefined, action) // we then add a new todo to the end of the existing state
      ]
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action))
    default:
      return state // unknown action type so just return the current state
  }
}

const undoableTodos = undoable(todos, {
  filter: distinctState()
})

export default undoableTodos
