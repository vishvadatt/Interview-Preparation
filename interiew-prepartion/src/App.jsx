import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ComA from './Components/UseContext/ComA'
import UseReducer from './Components/UseReducer/index';
import UseCallBack from './Components/UseCallback/index';
import UseMemoFunc from './Components/UseMemoFunc/index';
import FunctionCurrying from './Components/Function currying/index';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* useContext */}
     {/* <ComA /> */}

     {/* useReducer */}
     {/* <UseReducer /> */}

     {/* useCallback */}
    {/* <UseCallBack /> */}

    {/* useMemo */}
    {/* <UseMemoFunc /> */}

    {/* function currying */}
    <FunctionCurrying />

    </>
  )
}

export default App
