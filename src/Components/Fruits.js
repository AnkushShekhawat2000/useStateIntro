import React,{useState} from "react";

const Fruits = () => {
   
    const [favouiteFruits, setFavouriteFruits] = useState(["Apple","Mango","Banana"])
    const [fruit, setFruit] = useState("")

    console.log(favouiteFruits)


    function addFruits(e){
        e.preventDefault()
        setFavouriteFruits([...favouiteFruits, fruit])
        setFruit("")
    }

    return(
        <div>
              <form onSubmit={addFruits}>
                   <input type="text"  placeholder="Enter Fruits"
                    onChange={e => setFruit(e.target.value)}
                    value={fruit}
                   />
                   <button type="submit"> Add Fruits </button>
              </form>

             {/* display contbets of favouite Fruits array */}
               {favouiteFruits.join(", ")}
              

        </div>
    )
}

export default Fruits;