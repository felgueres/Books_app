## Managing App State with Redux

A Reducer is a function that returns a piece of the application state.
Because the application can have many pieces of state, you can have many reducers.

Ex. List of Books and Currently Selected Book

Remember that the application state is represented by a JS object.

Ex. The entire state of the app could be as follows:

{
  book: [{title: 'Harry Potter'}, {title:'Javascript'}],
  activeBook: {title: 'Javascript: The good parts'}
}

In this case you may have a Books Reducer that produces the values (in the key-value of an object) for book and another Reducer called ActiveBook for the second element of the object.

An application is composed by the views (React) and the state (redux).
To use the library the merges React and Redux, you define a Component as a container instead a component.

### Boilerplate for a component
```javascript

import React, { Component } from 'react';

export default class BookDetail extends Component{
  render(){
    return (
      <div>Book Detail!</div>
    );
  }
}

```
A Container is a React component that has a direct connection to the state managed by Redux.

Which components do you promote to containers?

You only create containers out of components when these really care about a particular piece of state (it's good to divide your app)
Think about what really needs to be connected to redux. Typically only parents and the prior sentence.

To connect you use two functions:

mapStateToProps: This gets the key:value that you need for the specified component FROM the state -- so the argument to this function is state.

from library react-redux, the connect function takes in mapStateToProps and the component that you want to promote as container, and exports it obviously with the state already maped.

Building the application state:

- The Application State is created by functions.

ACTION AND ACTION CREATORS

- A direct action or indirect action triggers an action creator (ex. hovering over, clicking, page loading)

- Action Creator: Is a function that returns an action in the form of an object that will flow to all reducers.

- The action-object is then sent to all reducers:
  {type: 'BOOK_SELECTED',
   book: {title: 'Book 2'}}

   the type describes the action and then you provide some extra information which is referred to as the payload.
   The payload further clarifies the conditions of the action.
   Every action needs to have a type that describes the purpose of the action.
   - The type is always an uppercase, usually a string
   - The payload is common but optional

- If reducer cares about the action, then will change that specific portion of the state which will in turn change the components. Else, will not do anything and return the current state (its portion of it).

- On notification of the change from reducers, the containers rerender with the new props and voila!

To do this we need a function that returns action, so an Action Creator and then we also need a function that binds this Action Creator into the all reducers; the latter is a function from the redux library called bindActionCreators while the former is user-defined.

Note that the bindActionCreators requires a parent function to dispatch -- mapDispatchProps. Similar to mapStateToProps, mapDispatchProps will be connected tu redux through the connect function.

Ex:

bindActionCreators({selectBook: selectBook}, dispatch) -- says, alright, I'm gonna take this actions, and dispatch it through a funnel to all reducers.

mapDispatchProps(dispatch) --> Anything returned from this function will end up as props on the BookList container.

Passing Action to reducers
--------------------------

All reducers get two arguments, current state and action.

export default function(state, action){}

- Note that the state passed is not the application state but only the state for what the reducer is responsible for.

- A reducer is going to get called whenever an action is dispatched by the app. That means there are actions that are not relevant to all reducers at all times.

- So what you do is that you handle cases is to define a base case to pass the current state back through.

```Javascript

export default function(state, action){
  return state
}
```

Then add the second state, which is the case when you do care about the action. Most redux reducers are setup with javascript switch statements where the switch statement is going to look at the action's type and if you care about it then you do something.

```Javascript

export default function(state, action){

  switch(action.type){
    case 'BOOK_SELECTED':
      return action.payload;
  }

  return state
}
```

Finally, you need to handle the case where the user first boots the app up. Because this would return an undefined state at the beginning, Redux doesn't like it, you must return a non-undefined value.

```Javascript

export default function(state, action){

  switch(action.type){
    case 'BOOK_SELECTED':
      return action.payload;
  }

  return state
}
```

To handle this, you define the state as null.

```Javascript

export default function(state=null, action){

  switch(action.type){
  case 'BOOK_SELECTED':
      return action.payload;
  }

  return state
}
```
Note this is ES6 syntax, which is saying, if the state doesn't come with anything, then set it as null, much like PYPYPYTHON.

Remember, the reducers must be connected to the combined_reducers in index.js

```javascript
import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
```

Any key that you pass to the combineReducers, will be in the Application State.

Boiler plate for a smart component or container
```javascript

import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component{
  render(){
    return (
      <div>Book Detail!</div>
    );
  }
}

function mapStateToProps(state){
  return {
    book:state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
```

Summary:
- Reducers are responsible for the application state.
- The state of a component and the application state have absolutely nothing to do with each other. They could've been called differently but creators decided to go with same name.
- Reducers get tied together in the combineReducers method in the reducers/index.js
- For each key in the combined reducers object, you assign one reducer which is responsible for creating that piece of state.
For example:
```javascript
const rootReducer=combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
  });
```
- The reducers, which are nothing but functions, will be responsible of creating the values for the keys in the application object
- The application state is a plain Javascript object.
- The reducers are in charge of forming and changing pieces of the application state. They do this through the use of actions:
- Whenever an action is dispatched, it flows through all the reducers in the application and each reducer has the option to return a piece of the state, based on the type of action that was received.
- An action creator are simple functions that return an action.
- Actions are JS objects with a type of action and a payload (payload is optional).

WorkFlow of the application:
- 1. You start with an action triggered either by the user or indirectly.
- 2. Then it triggers an Action Creator.
- 3. Action Creator returns an action saying the type of action and optionally a payload.
- 4. The Action is dispatched to all reducers.
- 5. Based on the type, some reducers will change the state of the application, some of them will not care and return the current state again.
- 6. The new state is assembled and ready to pass to the containers (components that communicate to redux or the application state).
- 7. On notification, containers rerender with the new props.

Finalword:
With Redux, components are only responsible of rendering data, not fetching it. They could tell redux to go get it but not themselves.
React components do not make Ajax rejects.
