import React, {useState, useMemo, useCallback} from "react";
import ChildFive from "./ChildFive";

const ParentFive = () => {
const [count, setCount] = useState(0)
const [name, setName] = useState('khaled')
const person = {
    fname: 'rakib',
    lname: 'alam'
}
const clickHandler = () => {}
const memorizedPerson = useMemo(() => person, [])
const memorizedClickHandler = useCallback(memorizedPerson, [])
console.log('ParentFive component');
  return (
    <div>
        <button onClick={() => {setCount(c => c+1)}}>{count}</button>
        <button onClick={() => {setName('mahmud')}}>{name}</button>
        <ChildFive
         name={name} 
        //  person = {person}
        //  clickHandler ={clickHandler}
        person = {memorizedPerson}
        clickHandler ={memorizedClickHandler}
         />
    </div>
  )
}
export default ParentFive