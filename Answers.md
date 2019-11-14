1. What problem does the context API help solve?

The Context API solve the issue of state transfer between components. Without an API like this in order to transfer state between components you would need to pass state down as props. The Context API allows us to store state outside of the components and hook into it where ever we need it.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Store - A location where data can be stored. In redux this is globally across the application and any component can hook in or connect to the store to access the data.
Actions - A set of functions that trigger reducers to run and modify the store in a particular way. In redux you can dispatch actions using action creators.
Reducers - Takes in the current state of the store and an action and reduces them down into a new state.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global and useful when data is needed to be synced across multiple components particularly when they don't share parents.
Component state is state that is stored inside the component itself. This is most useful when data is localized to that component and not used anywhere else.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux thunk is a Redux Middleware changes the return value of action creators into functions that take in dispatch.
Redux thunk is primarily used for async actions.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

My preferred state management is Context as it is a very small API that does one thing. It doesn't get overly complicated and is reused across many react libraries like the React Router and even Material UI.
