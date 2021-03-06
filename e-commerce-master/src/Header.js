import React, {useState, useContext} from 'react'
import './header.css'
import { FaShoppingCart,FaSearch } from "react-icons/fa";
import Avatar from 'react-avatar';
import Store,{Context} from "./Store"
import {NavLink,BrowserRouter } from 'react-router-dom'
import firebase,{auth} from "firebase"
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';

function Header() {

    const {email, cartArray} = useContext(Context);
    // const cartArray=[];
    console.log("from header email", email)
    // console.log('ProductCart',state.productCart)
    // console.log("email", state);
    const url="http://localhost:3000/"
    // const url = "https://e-commerce-67ca6.web.app/"
    //console.log("state=>",state)
    
    const LogOut=()=>{
        firebase.auth().signOut().then(() => {
            console.log("signOut successfully")
          }).catch((error) => {
            alert(error.message)
          });
    }

    return (
        <div className="header">
            <a href={`${url}`}>
            <div className="header__image">
            
                <img
                src="https://i.pinimg.com/originals/ab/ca/4c/abca4c51c7e166b2980105b5e98b7ac2.jpg"
                alt="amazon_logo"
                />  
              
            </div>
            </a>

            <div className="header__search">
                {/* <input type="text" placeholder=""/>
                <button><FaSearch/></button> */}


                 <input type="text" placeholder=""/>
                <button><FaSearch/></button>
                
            </div>
            {
                email === null ? (
                    <div>
                    </div>
                ) : (
                    <div className="header__cart">
                        <h4> {cartArray.length}</h4>
                        
                        <p>
                            <a href={`${url}cart`}> <FaShoppingCart/></a>
                        </p>
                        
                    </div>
                )   
            }

            {
                
                email===null?
                <div className="dropdown">
                        
                    <button className="dropbtn">Login/Signup</button>
                    <div className="dropdown-content">
                        <a href={`${url}login`} >Login</a>
                        <a href={`${url}signup`}>SignUp</a>
                    </div>
                </div>
                :
                <div className="header__profile">
                    <div className="dropdown">
                        <Avatar
                        round={true}
                        alt="AK"
                        src=""
                        size="50"
                        />
                        <div className="dropdown-content">
                            <a href="#">My Profile</a>  
                            <a href="#">Setting</a>
                            <a href="#" onClick={LogOut}>LogOut</a>
                        </div>
                    </div>
                </div>
            }    


            {/* {
                
                firebase.auth().onAuthStateChanged((firebaseUser)=>{
                     console.log("auth state change",firebaseUser)
                    // console.log(state)
                    // console.log("email",state.userEmail)
                    firebaseUser?
                    setEmail(firebaseUser.email):
                    setEmail(null)
                    
                })
            } */}
            
            
            
        </div>
    )
}

export default Header