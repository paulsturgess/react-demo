// Container components connect the presentational components to Redux

import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import TodoLink from '../components/TodoLink'

// mapStateToProps defines how to transform the current Redux store
// state into the props you want to pass to the presentational component
const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

// mapDispatchToProps receives the dispatch() method and returns
// callback props that can be used to inject into the presentational component
// Note ownProps are the props of TodoLink (connected below)
const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setVisibilityFilter(ownProps.filter))
  }
})

// A container component is just a React component that uses store.subscribe()
// to read a part of the Redux state tree and supply props to a
// presentational component it renders
const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoLink)

export default FilterLink
