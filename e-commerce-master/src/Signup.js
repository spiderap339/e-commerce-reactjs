import React, {useState} from 'react';
import firebase, {auth} from './firebase.js';
import { Redirect,useHistory } from 'react-router-dom';
import {db} from './firebase'
import {Context} from "./Store"

const Signup = () => {

    // const [Userdetail, setUserdetail] = useState({username:"",email:"",password:""});
    const [username,setUsername]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    let history=useHistory();

    const changeHandler=(event)=>{
        // setUserdetail((prevProps) => ({
        //     ...prevProps,
        //     [event.target.name]: event.target.value
        /// }));
        //console.log(Userdetail)
        
        if (event.target.name === "username") {
            setUsername(event.target.value);
        }

        if (event.target.name === "email") {
            setEmail(event.target.value);
        }

        if (event.target.name === "password") {
            setPassword(event.target.value);
        }

        // console.log(username)
        // console.log(email)
        // console.log(password)
        
    }

    const handleSubmit = () => {
        
        const promise = auth.createUserWithEmailAndPassword(email, password);
        promise 
        .then(()=>{
            console.log("SignUp Successfully");
            db.collection("userid").doc(email).set({
            })
            .then(() => {
                console.log("Document successfully written!");
            })
            .catch((error) => {
                console.error("Error writing document: ", error.message);
            })
            history.push("/")
        })
        .catch((e)=>alert(e.message));

        console.log('signup...')
    }
    return (
        <div className="login">
            <h1>SignUp</h1>
            
            <h4>Username</h4>
            <input name="username" onChange={changeHandler}></input>

            <h4>Email</h4>
            <input name="email"  onChange={changeHandler} type="email"></input>

            <h4>Password</h4>
            <input name="password" onChange={changeHandler} type="password"></input>
            <br/> <br/>

            <button onClick={handleSubmit}>SignUp</button>
            
        </div>
    )
}

export default Signup