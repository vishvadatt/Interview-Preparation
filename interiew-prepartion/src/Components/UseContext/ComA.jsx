import React, { createContext } from 'react'
import ComB from './ComB'
// create a creatContext
const civilWar = createContext();

function ComA() {
    const name = "Captain America"
    const secondname = "iron man"
  return (
    // provide a value using provider
    <civilWar.Provider value={{name,secondname}}>
        <ComB />
    </civilWar.Provider>
  )
}

export default ComA
export { civilWar }