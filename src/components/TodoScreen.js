// By default functional stateless components should be written until
// we need to use local state or the lifecycle methods

import React from 'react'
import TodoFilters from './TodoFilters'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import UndoRedo from '../containers/UndoRedo'

const TodoScreen = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <TodoFilters />
    <UndoRedo />
  </div>
)

export default TodoScreen
