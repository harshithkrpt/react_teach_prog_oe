import React, { useEffect,useState } from 'react'

export default function LifeCycleHook() {

    const [val1,setVal1] = useState(0);
    const [val2,setVal2] = useState(10);

    useEffect(() => {
        console.log("HELLO I AM MOUNTED I WILL BE VISIBLE ONLY ONCE");

        
       return () => {
            console.log("HELLO I WILL BE NOT VISIBLE FROM NOW ON ")
       }
    },[]);   

    useEffect(() => {
        console.log("IF YOU CHANGE ANYTHING , PROPS , STATE , I WILL BE VISIBLE");

        return () => {
            console.log("HELLO")
        }
    });


    useEffect(() => {
        console.log("Val1 is Changed")
        // API1
    },[val1]);

    useEffect(() => {
        console.log("Val2 is Changed")
        // API2
    },[val2]);



  return (
    <div>
        <h1 onClick={() => { setVal1(val1+1) }}>HELLO {val1}</h1>

        <h1 onClick={() => { setVal2(val2+1) }}>HELLO {val2}</h1>

    </div>
  );
}
