import React, {useContext} from 'react'
import { CountContext } from './ContextParent';

export const ChildA = () => {
    console.log('Children A Render');
  return (
    <>
        <div>Child A</div>
        <ChildB/>
      </>
  )
}

export const MemorizedChildA = React.memo(ChildA)

export const ChildB = () => {
    console.log('Children B Render');
    return (
      <>
        <div>Child B</div>
        <ChildC/>
      </>
    )
}
  export const ChildC = () => {
    const count = useContext(CountContext)
    console.log('Children C Render');
    return (
      <div>Child C count {count}</div>
    )
  }