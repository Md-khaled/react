import React, {useState} from 'react'
import useDocumentTitle from './useDocumentTitle'
function DocumentTitleOne() {
    const [count, setCount] = useState(0)
    const countHandler = () => {
        setCount(count + 1)
    }
    useDocumentTitle(count)
  return (
    <button onClick={countHandler}>Count - {count}</button>
  )
}

export default DocumentTitleOne