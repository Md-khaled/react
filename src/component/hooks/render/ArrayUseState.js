import React, {useState} from 'react'

const initState = ['rakib', 'alam']

const ArrayUseState = () => {
    const [person, setPerson] = useState(initState)
    const clickhandler = () => {
        setPerson([...person,'test','kahaled'])
    }
    console.log('Array use state render');
  return (
    <>
    <button onClick={clickhandler}>click</button>
       {
         person.map(person => (
            <div key={person}>
                {person}
            </div>
        ))
       }
    </>
  )
}

export default ArrayUseState