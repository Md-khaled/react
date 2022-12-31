import React from 'react'

const ChildFive = ({name, person}) => {
    console.log('Child Five component');
  return (
    <div>ChildFive Hello {name} {person.fname} {person.lname}</div>
  )
}

export default React.memo(ChildFive)