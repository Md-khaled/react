import React, {useState, useEffect} from 'react'

function HookMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMouseposition = e =>{
        console.log('mouse event');
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(() => {
        console.log('sssss');
        window.addEventListener('mouseover', logMouseposition)
        return () => {
          console.log('unmount');
          window.removeEventListener('mouseover', logMouseposition)
        }
    },[])
  return (
    <div>HookMouse X - {x} Y - {y}</div>
  )
}

export default HookMouse