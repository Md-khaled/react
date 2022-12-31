import React, {useState} from 'react'
const ParentOne = ({children}) => {
const [count, setCount] = useState(0)
    console.log('parent one component');
  return (
    <div>
        <button onClick={() => {setCount(c => c+1)}}>{count}</button>
        {/* <ChildOne/> */}
        {children}
    </div>
  )
}

export default ParentOne