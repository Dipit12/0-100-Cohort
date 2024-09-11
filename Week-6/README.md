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
