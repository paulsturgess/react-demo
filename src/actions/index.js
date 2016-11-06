// Actions are payloads of information that send data from your
// application to the store

let nextTodoId = 0
const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})

module.exports = {
	addTodo: addTodo,
  setVisibilityFilter: setVisibilityFilter,
	toggleTodo: toggleTodo
}
