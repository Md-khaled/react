import React, {useState} from 'react'

const initState = {
    fName: 'khaled',
    lName: 'Mahmud'
}
const ObjectUseState = () => {
    const [person, setPerson] = useState(initState)

    const changeName = () =>{
       
        setPerson({...person,fName:'test',lName:'rakib'})
    }

    console.log('object useState render');
  return (
    <div>
        <button onClick={changeName}>{person.fName}{person.lName}</button>
    </div>
  )
}

export default ObjectUseState