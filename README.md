# A React Demo app

This app exists to allow me to demo [React](https://facebook.github.io/react/) for a dev talk

It was bootstrapped from [Create React App](https://github.com/facebookincubator/create-react-app)

[The original Readme is well worth a read](README-CREATE-REACT-APP.md)

## What does it do?

- The [HelloWorld component](/src/components/HelloWorld.js) shows the simplest implementation of a component
- The [Navigation component](/src/components/Navigation.js) shows a [stateless component](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.d16c3nhh8)
- The [Clock component](/src/components/Clock.js) shows the component lifecycle methods
- The test for the Clock component shows how to freeze and manipulate time for testing
- The [Search component](/src/components/Search.js) demonstrates how changing state re-renders the component
- The [Search2 component](/src/components/Search2.js) shows how components can be extended
- The [TodoScreen](/src/components/TodoScreen.js) and related components and classes demo the [Redux architecture](http://redux.js.org/)
- Undo/redo history is implemented via [redux-undo](http://redux.js.org/docs/recipes/ImplementingUndoHistory.html)
- [index.js](/src/index.js) is the entry point that sets up Redux and [react-router](https://github.com/reacttraining/react-router) with [browser history](https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#browserhistory)

## Installation

Get the dependencies:

```
$ npm install
```

## Running the app

Boot it up via:

```
$ npm start
```

Tests are written in [Jest](https://facebook.github.io/jest/) and run via:

```
$ npm test
```

Check test coverage via:

```
$ npm test -- --coverage
```

## Resources

- https://facebook.github.io/react/
- https://github.com/facebookincubator/create-react-app
- http://redux.js.org/
- https://github.com/facebook/react/tree/master/examples
- https://egghead.io/courses/getting-started-with-redux
- https://yarnpkg.com/
