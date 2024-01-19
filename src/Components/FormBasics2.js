import React,{useState} from "react";


const FormBasics = () => {
    
    const [name, setName] = useState("") 
    const [result, setResult] = useState("")

    console.log("name", name)
    console.log("result", result)

    function handleInput(e){
        setName( e.target.value)
        setResult("");
    }

    function handleSubmit(e){
        e.preventDefault();
        setResult(name);
        setName("");
    }

    

    return(
        <div>
               {/* onSubmit={handleSubmit} */}
           <form >
                 <input type="text" placeholder="Enter Name" 
                  onChange={handleInput}
                  value={name}
                 />
                  <button onClick={handleSubmit}> Submit </button>

           </form>


           <p>{result}</p>

           
        </div>
    )
}

export default FormBasics;