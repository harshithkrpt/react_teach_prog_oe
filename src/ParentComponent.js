import React , { useState } from 'react';
import ChildComponent from './ChildComponent';


// Parent StateFul Component
export default function ParentComponent() {

    // State
    const [count,setCount] = useState(100);


    const onClickHandler = () => {
          setCount(count+1); 
    }

    return <div style={{marginTop:'10px'}}>
        <h1>I am 👴 Parent</h1>

            <div>
               Count :  {count - 100}
            </div>

            <button onClick={onClickHandler}>Click Me</button>

            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',marginTop:'10px'}}>
            <ChildComponent parentState={count} parentStateUpdater={onClickHandler} childNumber={1}/>
            <ChildComponent parentState={count} parentStateUpdater={onClickHandler} childNumber={2}/>
            <ChildComponent parentState={count} parentStateUpdater={onClickHandler} childNumber={3}/>
            <ChildComponent parentState={count} parentStateUpdater={onClickHandler} childNumber={4}/>
            <ChildComponent parentState={count} parentStateUpdater={onClickHandler} childNumber={5}/>
            <ChildComponent parentState={count} parentStateUpdater={onClickHandler} childNumber={6}/>
            </div>
           

    </div>;
}