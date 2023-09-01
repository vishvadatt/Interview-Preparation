import React, { useReducer } from 'react'

const initialValue = 0;
const reducer = (state,action) => {
  if(action.type === "increment"){
    return state + 1
  }

  if(action.type === "decrement"){
    return state - 1
  }
}

const index = () => {
  const [state,dispatch] = useReducer(reducer,initialValue);

  return (
    <div>
        {state}
        <br />
        <button onClick={() => dispatch({type : "increment"})}>Increment</button>
        <button onClick={() => dispatch({type : "decrement"})}>Decrement</button>
    </div>
  )
}

export default index