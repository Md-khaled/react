import React, {memo} from 'react'

const ChildThree = ({children, name}) => {
    console.log('child three component');
  return (
    <div>ChildThree {children} {name}</div>
  )
}

export default memo(ChildThree)