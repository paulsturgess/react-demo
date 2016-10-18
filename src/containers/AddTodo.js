// Container components connect the presentational components to Redux
// This is a mixed component that is both presentation and container

import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

// A container component is just a React component that uses store.subscribe()
// to read a part of the Redux state tree and supply props to a
// presentational component it renders
AddTodo = connect()(AddTodo)
// In this case there are no props

export default AddTodo
