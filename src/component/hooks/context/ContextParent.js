import React, {useState, useMemo, useCallback} from "react";
import { MemorizedChildA } from "./ContextChildren";

export const CountContext = React.createContext()
const CountProvider = CountContext.Provider
const ContextParent = () => {
const [count, setCount] = useState(0)
console.log('ContextParent Render');
  return (
    <>
        <button onClick={() => {setCount(c => c+1)}}>{count}</button>
        <CountProvider value={count}>
            <MemorizedChildA/>
        </CountProvider>
    </>
  )
}
export default ContextParent