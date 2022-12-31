import React, {useState} from 'react'
 const initState = {
    fname:'khaled',
    lname:'mahmud'
 }
export const ObjectUseState = () => {
    const [person, setPerson] = useState(initState)
    const changeName = () => {
      person.fname='rakib'
      person.lname='alam'
      setPerson(person)
    }
    console.log('i ama a person component');
  return (
    <div>
        <button onClick={changeName}>{person.fname}{person.lname}</button>
    </div>
  )
}
