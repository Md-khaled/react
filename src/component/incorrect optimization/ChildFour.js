import React from 'react'

const ChildFour = ({name}) => {
    const date = new Date()
    console.log('Child four component');
  return (
    <div>Hello {name}. It is currently {date.getHours()}: {date.getMinutes()}:{date.getSeconds()}</div>
  )
}

export default React.memo(ChildFour)