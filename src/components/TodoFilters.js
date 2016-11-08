// By default functional stateless components should be written until
// we need to use local state or the lifecycle methods
import React from 'react'
import FilterLink from '../containers/FilterLink'

const TodoFilters = () => (
  <p>
    {"Filter: "}
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    {" | "}
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    {" | "}
    <FilterLink filter="SHOW_COMPLETED">
      Completed
    </FilterLink>
  </p>
)

export default TodoFilters
