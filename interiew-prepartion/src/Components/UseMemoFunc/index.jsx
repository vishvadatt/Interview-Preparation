import React, { useMemo, useState } from 'react'

const index = () => {
  const [count, setCount] = useState(0);
  const [show,setShow] = useState(true);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const expensiveCalculation = (count) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
      count += 1;
    }
    return count;
  };

  const calculation = useMemo(() => {
    return expensiveCalculation(count)
  },[count]);
  // const calculation = expensiveCalculation(count)
  return (
    <>
<button onClick={() => setShow(!show)}>
  {show ? "Please click here" : "Thank you"}
</button>
        <div>
          Count: {calculation}
          <button onClick={() => increment()}>+</button>
        </div>
    </>
  )
}

export default index  