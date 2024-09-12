## A component can only return a single top level XML. Why??
    - makes is it easy to do reconcililation
    Reconciliation in react is a process of updating real DOM with the changes identified between updated virtual DOM and previous virtual DOM.
## Some Random important points
    - React Lets you create Dynamic websites
    - Goal is to minimise re-renders
    
## Re-rendering
    - React did some work to calculate when all should update in this component
    - The component actually got called(you can put a log to conform this)
    - The inspector shows you a bouding box around the component

    - It happens when:  
        - A state variable that is being used inside a component changes
        - A parent component re-renders triggers all children re-rendering
    - You want to  minimise the number of re-renders to make a highly optimal react app
    - The more the component that are getting re-rendered the worse

## Keys in React using Example
    - Lets create a simple todo app that renders 3 todos
    - Create a Todo Component that accepts title, description as input
    - Initialise a state array that has 3 todos
    - Iterate over the array to render all the TODO's
    - A button in the top level App component to add a new TODO
## Hooks
    - Those functions which start with "use" are called hooks
    - Hooks in react are functions that allow you to "hook into" React state and lifecycle features from functions components
    - eg: useState, useEffect, useMemo, useCallback,useRef,useReducer,useContext etc etc
## Common Hooks in react
    - useEffect, useCallback, useMemo, custom hooks, Prop drilling

    Two jargons before we start:
        - Side effects
            - In react, the concept of side effects encompasses any operation that reach outside the functional scope of a React component. These operations can affect other components, interest with the browser, or perform async data fetching

        - Hooks
            - Hooks are features introduced in react 16.8 that allows you to use state and other React features without writing a class. They enable functional components to have access to stateful logic and lifecycle feautres, which were previously only possible in class components.This led to a more concise and readable way of writing components in React.

    - useState Hook
        - Let's you describe the state of your app, whenever state updates, it triggers a re-render which finally returns in a DOM update
    
    -useEffect Hook
        - The useEffect hook is a feature in React,it allows you to perform side effects in function components.Side effects are operations that can affect other components or cant be done during rendering, such as data fetching, subscriptions or manually changing the DOM in react components
    - Question
        - Write a component that takes a todoId as an input and fetches the data for that todo from the given endpoint and then renders it
        - How would the dependency array change - Done in hook-2