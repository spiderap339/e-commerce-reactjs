import React, {useState} from 'react'
import './login.css';
import firbase,{auth} from './firebase'
import { Redirect,useHistory } from 'react-router-dom';
const Login = () => {
    let history=useHistory();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const changeHandler=(event)=>{
        // setUserdetail((prevProps) => ({
        //     ...prevProps,
        //     [event.target.name]: event.target.value
        // }));
        //console.log(Userdetail)
        
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
        
        const promise = auth.signInWithEmailAndPassword(email, password);
        promise
        .then(()=>{
                console.log("Succesfully logged in");
                history.push("/");
                // return <Redirect to="/signup" />
            }
        )
        .catch((e)=>alert(e.message));

        console.log('logged In...')
        console.log(promise)
    }
    return (
        <div className="login">
            <h1>Login</h1>

            <h4>Email</h4>
            <input name="email"  onChange={changeHandler} type="email"></input>

            <h4>Password</h4>
            <input name="password" onChange={changeHandler} type="password"></input>
            <br/> <br/>

            <button onClick={handleSubmit}>LogIn</button>
            
        </div>
    )
}

export default Login
