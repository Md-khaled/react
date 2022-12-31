import React, {useState} from "react";
import ChildOne from "../hooks/render/ChildOne";
import ChildFour from "./ChildFour";
import ChildThree from "./ChildThree";

const ParentThree = () => {
const [count, setCount] = useState(0)
const [name, setName] = useState('khaled')
console.log('ParentThree component');
  return (
    <div>
        <button onClick={() => {setCount(c => c+1)}}>{count}</button>
        <button onClick={() => {setName('mahmud')}}>{name}</button>
        <ChildFour name={name}/>
        <ChildThree name={name}><strong>Hello</strong></ChildThree>
    </div>
  )
}
export default ParentThree