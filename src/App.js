import React, {useReducer} from 'react';
import './App.css';
import Counter from './component/hooks/counter';
import Name from './component/hooks/Name';
import HookMouse from './component/hooks/HookMouse';
import MouseContainer from './component/hooks/MouseContainer';
import ComponentC from './component/hooks/context/ComponentC';
import CounterOne from './component/hooks/reducer/CounterOne';
import CounterTwo from './component/hooks/reducer/CounterTwo';
import CounterThree from './component/hooks/reducer/CounterThree';
import ComponentA from './component/hooks/reducer/ComponentA';
import ComponentB from './component/hooks/reducer/ComponentB';
import ComponentCC from './component/hooks/reducer/ComponentC';
import FetchData from './component/hooks/reducer/FetchData';
import Parent from './component/hooks/callback/Parent';
import MemoCounter from './component/hooks/memo/Counter';
import DocumentTitleOne from './component/hooks/custom/DocumentTitleOne';
import UserInputForm from './component/hooks/custom/UserInputForm';
import ObjectUseState from './component/hooks/render/ObjectUseState';
import UseReducer from './component/hooks/render/UseReducer';
import ArrayUseState from './component/hooks/render/ArrayUseState';
import ParentOne from './component/hooks/render/ParentOne';
import ChildOne from './component/hooks/render/ChildOne';
import GrandParent from './component/hooks/render/GrandParent';
import ParentThree from './component/incorrect optimization/ParentThree';
import ParentFive from './component/incorrect optimization/ParentFive';
import ContextParent from './component/hooks/context/ContextParent';
export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
export const CountContext = React.createContext()

const initialState = 0
const reducer = (state, action) =>{
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}
function App() {
  const [count, dispatch] = useReducer(reducer,initialState)
  console.log('appa',count);
  return (
    <div className="App">
       {/* <Counter/>
       <Name/>
       <HookMouse/>
       <MouseContainer/>
       <UserContext.Provider value={'khaled'}>
          <ChannelContext.Provider value={'Learning react'}>
            <ComponentC/>
          </ChannelContext.Provider>
       </UserContext.Provider>
       <CounterOne/>
       <CounterTwo/>
       <CounterThree/>

       <h2>useReducer with useContext</h2>
      <CountContext.Provider
      value = {{countState: count, countDispatch: dispatch}}>
        <h5>Counter - {count}</h5>
        <ComponentA/>
        <ComponentB/>
        <ComponentCC/>
      </CountContext.Provider>
      <h3>Fetch data</h3>
      <FetchData/>
      <h3>Use Callback</h3>
      <Parent/>
      <h3>Use Memo</h3>
      <MemoCounter/>
      <h3>use custom hook</h3>
      <DocumentTitleOne/>
      <h3>use Input Custom hook</h3>
      <UserInputForm/>
      <h2>State Immutability</h2>
      <ObjectUseState/>
      <h2>Use Reducer Render</h2>
      <UseReducer/> */}
      {/* <h2>State Immutability</h2>
      <ObjectUseState/>
      <ArrayUseState/>
      <GrandParent/> */}
      {/* <h2>Icorrect optimization</h2>
      <ParentThree/>
      <ParentFive/> */}
      <h3>Render Context</h3>
      <ContextParent/>
    </div>
  );
}

export default App;
