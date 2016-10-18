// A reducer is a pure function that takes the previous state and
// an action, and returns the next state

const todo = (state, action) => {
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
        completed: !state.completed
      }
    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state, // spread attribute (copies the existing state array)
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      )
    default:
      return state
  }
}

export default todos
