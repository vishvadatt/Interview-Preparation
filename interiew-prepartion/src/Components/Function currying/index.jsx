import React, { useState } from 'react'

const index = () => {
  const [total,setTotal] = useState(0)
  
  // function recurring example
  const getSum = (a) => (b) => (c) => (d) => (e) => {return a + b + c + d + e;} 
  console.log(getSum);
  const values = getSum(10)(20)(30)(40)(50)
  console.log(values);
  // setTotal(values);

  return (
    <div>
      Function currying <br />
      total: {total}
    </div>
  )
}

export default index