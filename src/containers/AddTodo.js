// Container components connect the presentational components to Redux

import { connect } from 'react-redux';
import AddTodoForm from '../components/AddTodoForm'
import actions from '../actions';

// mapDispatchToProps receives the dispatch() method and returns
// callback props that can be used to inject into the presentational component
// This means addTodo can be set as a prop when testing AddTodoForm which makes
// it easy to spy and check the correct actions are triggered
export const mapDispatchToProps = (dispatch) => ({
  addTodo: (value) => dispatch(actions.addTodo(value))
})

// A container component is just a React component that uses store.subscribe()
// to read a part of the Redux state tree and supply props to a
// presentational component it renders
const ConnectedAddTodo = connect(null, mapDispatchToProps)(AddTodoForm)
// In this case there are no props

export default ConnectedAddTodo
