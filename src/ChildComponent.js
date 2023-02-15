import React,{useEffect, useState} from 'react'

export default function ChildComponent({ parentState,parentStateUpdater,childNumber }) {



//   State Count
const [count,setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  }

  return (
    <div style={{ border: '1px solid black', borderRadius: '10px'}}>
        <div>ChildComponent</div>


        <h1>I am 👦 Child {childNumber}</h1>

        <div>
            Count :  {count + (parentState ? parentState : 0)}
        </div>

        <button onClick={increaseCount}>Click Me</button>

        <button onClick={parentStateUpdater}>Click Me to Update Everything</button>

        </div>
  )
}
