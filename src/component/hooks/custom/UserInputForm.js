import React from 'react'
import useInput from './useInput'

function UserInputForm() {
    const [firstName, bindFirstName, resetFirstName] = useInput('')
    const [lastName, bindLastName, resetLastName] = useInput('')

    const handleFormSubmit = e => {
        e.preventDefault()
        console.log(firstName, lastName);
        resetFirstName()
        resetLastName()
    }
  return (
    <div>
        <form onSubmit={handleFormSubmit}>
            <label>First Name</label>
            <input 
            type="text" 
            {...bindFirstName} />
             <label>First Name</label>
            <input 
            type="text" 
            {...bindLastName} />

            <button type="submit">submit form</button>
        </form>
    </div>
  )
}

export default UserInputForm