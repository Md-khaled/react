import React, {useReducer} from 'react'

const initialState = 0;
const reducer = (state, action) =>{
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialState;
        default:
            return state;
    }
}
function UseReducer() {
    const [count, dispath] = useReducer(reducer, initialState)
    console.log('use reducer render');
  return (
    <>
        <div>{count}</div>
        <button onClick={() => dispath('increment')}>Increment</button>
        <button onClick={() => dispath('decrement')}>Decrement</button>
        <button onClick={() => dispath('reset')}>Reset</button>
    </>

  )
}

export default UseReducer