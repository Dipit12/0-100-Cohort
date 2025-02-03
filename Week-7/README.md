## Topics to Cover: 
    - Routing, Prop drilling, Context API

## Routing
    - Jargon
        - Single Page Application
        - Client Side bundle
        - Client side routing
    - In react routing for Web Applications is done using React-router-DOM
    - use of useNavigate

## Prop drilling
    - Before we begin, how do you think one should manage his state??
        - 1. Keep everything in the top level component(C1) - Wrong
        - 2. Keep everything as low as possible (at the LCA of children that need a state) - True

    - Store the components in the least component ancestor
    - Push is down as much as possible - Rule of thumb

## Context API
    - Helps in state management
    - When we have to pass props through multiple components so that the child component gets that component, then a lot of components get the props which they dont even use, to resolve this problem of prop drilling we have the concept of state management
    - Context API is used for State management
    - Even other libraries like Redux,Recoil help in State management
    