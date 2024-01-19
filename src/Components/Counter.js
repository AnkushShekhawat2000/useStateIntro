import React,{useState} from "react"
// import {useState} from "react"

const CounterApp = ()=>{
      const [count, setCount] = useState(0);

      function increase(){
        if(count <= 9)
        {
            setCount(count+1);
        }
      }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increase}>Increase</button>

            <button onClick={()=> count > 2 ?setCount(count-1) : ""}>Decrease</button>

            <button onClick={()=> setCount(0)}>Reset</button>
        </div>
    )
}

export default CounterApp;