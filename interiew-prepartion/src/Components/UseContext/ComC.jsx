import React, { useContext } from 'react'
import { civilWar } from './ComA';

function ComC() {
    const {name,secondname} = useContext(civilWar);

  return (
    <div>Hello {name} {secondname}</div>
  )
}

export default ComC