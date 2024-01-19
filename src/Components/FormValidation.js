
import React,{useState} from "react";

const FormValidation = () => {
    const [user, setUser] = useState({name:"",email:"",password:"",confirmPassword:""})
    const [message, setMessage] = useState("")

    // we are storing the values in variables
    const {name,email,password,confirmPassword} = user
    // console.log(`${name} ${email} hahaha`)

    function updateUser(e){
         console.log(e.target.name, e.target.value)
        //  setUser({...user, email:e.target.value})
        let key = e.target.name
        setUser({...user, [key]:e.target.value})
        
    }
    

    function submitUser(e){
         e.preventDefault() 

         // validations  
         if(!name || !email || !password || !confirmPassword){
             alert("Please fill all the fields")
         }
         else if(password !== confirmPassword){
             alert("Password and Confirm Password must be same")
         }
         
         else{
            setMessage("You have Registered Successfully")
         }


    }
    

    return (
        <div>
           
           {
            message ? <div> 
               Hey {name} { message} with email {email}
            </div> : null
           }

            <form onSubmit={submitUser}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={updateUser}
                    name="name"
                />
                <br />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={updateUser}
                    name="email"
                    
                />
                <br />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={updateUser}
                    name="password"
                    
                />
                <br />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={updateUser}
                    name="confirmPassword"
                />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default FormValidation;