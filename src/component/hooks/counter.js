import React, {useState, useEffect} from 'react'

function Counter() {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount)
    const [name, setName] = useState('')
    useEffect(() => {
        console.log('trstst');
        document.title =`You clicked ${count} times`
    },[count])
    const incrementFive = () => {
        for (let index = 1; index < 6; index++) {
            setCount(preCountt => preCountt + 1)
            
        }
    }
  return (
    <div>
        <input 
        type="text" 
        name="" 
        value={name}
        onChange={e => setName(e.target.value)}
        />
        counter {count}
        <button onClick={() => setCount(initialCount)}>reset</button>
        <button onClick={() => setCount(preCount => preCount + 1)}>increment</button>
        <button onClick={() => setCount(preCount => preCount - 1)}>decrement</button>
        <button onClick={incrementFive}>increment 5</button>
    </div>
  )
}

export default Counter