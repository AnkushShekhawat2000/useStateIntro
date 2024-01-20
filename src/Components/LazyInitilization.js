
import React, {useState} from "react";

function hello(){
    console.log("Hello");
    return 10;
}

const LazyInitilization = () => {

    // this is not execute again and again using callback react know this will not execute again
   const [count, setCount] = useState(
    ()=>{
    console.log("Hello"); 
    return 100
   })

   // this is execute again and again

//    const [count, setCount] = useState(hello())



    return(
        <div>
             <h1>{count}</h1>
             <button onClick={() => setCount(count + 1)}>Click</button>
        </div>
    )
}

export default LazyInitilization;


// for(let i = 0; i < 100; i++){
//     console.log(i)
// }