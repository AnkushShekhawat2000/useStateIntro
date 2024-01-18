import React,{useState} from "react"
// import { useState } from "react"


// UseState Use 
// effect of normal fun and useState both

let a = 0;

const Basics = () =>{
    let [count, setCount] = useState(0)

    function incCount(){
        setCount(count+1);
    }
     
    // let a = 0; // try this also  this will reset the value again 0
    function inc(){
        a = a+1;
        console.log(a);
    }

    return (
        <div>
            <h1>{a}</h1>
            <button onClick={inc}>Increase A</button>
            
            <h1>{count}</h1>
            <button onClick={incCount}>Increase C</button>
            

        </div>
    )
}






















// what is the effect if we do not use useState if we are use only normal fun 
// varible will not update


// const Basics = () => {
//     let a = 10;

//     function inc(){
//       a = a+1;
//       console.log(a);
//     }

//     return (
//         <div>
//             <h1>{a}</h1>
//             <button onClick={inc}>Incease</button>
//         </div>
//     )
// }

export default Basics