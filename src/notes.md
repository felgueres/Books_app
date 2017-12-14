## Notes on Redux
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
