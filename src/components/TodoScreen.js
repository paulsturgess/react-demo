// By default functional stateless components should be written until
// we need to use local state or the lifecycle methods

import React from 'react'
import TodoFilters from './TodoFilters'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const TodoScreen = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <TodoFilters />
  </div>
)

export default TodoScreen
