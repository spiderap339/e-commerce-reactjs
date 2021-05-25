import React, {useState, useContext, useEffect} from 'react'
import {CartProduct} from "./CartProduct"
import {Context} from "./Store"
import "./cart.css"
import Header from "./Header"
import { db, auth} from './firebase'
import firebase from 'firebase';

const Cart = () => {

    const {email, cartArray} = useContext(Context);
    //const [state, setState] = useContext(Context);
    // const [cartArray,setCartArray]=useState([]);
    
    const handleDelete=(docid)=>{
        db.collection("userid").doc(email).collection("carts").doc(docid).delete().then(() => {
            //cartArray.filter((cart)=>cart.id!=id)
            console.log("Document successfully deleted!",cartArray);
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });

        
    }

    // useEffect(() => {
    //     //this is where code runs
    //     //console.log("email", email, typeof(email))
    //     email?
    //     db.collection('userid').doc(email).collection('carts').onSnapshot(snapshot=>{
    //       //everytime the new posts added, this code fires..
    //       //setCartArray(snapshot.docs.map((doc) =>doc.data()))
    //       setCartArray(snapshot.docs.map((doc) =>({
                    
    //             docid : doc.id,
    //             doc : doc.data(),
    //         })))
        
    //     }):
    //     <p></p>
    //   }, [email])

    var totalPrice = 0;

    cartArray.map((prod) => {
        totalPrice = totalPrice + parseInt(prod.doc.price)
        // console.log(parseInt(prod.doc.price))
    })
    console.log("totalPrice", totalPrice)
    return (
        <div className="cart">
            {/* <h3><u>All Cart Product shown here</u></h3> */}
            <Header/>
            <div className="cart__home">
                
                <div className="cart__shop">
                    <h1>Shopping Cart</h1>
                    <hr></hr>
                    {
                    cartArray.map((prod)=>{
                        return(
                            
                        <div className="cart__item">
                            <div className="cart__itemProduct">
                                
                                <CartProduct
                                    id={prod.doc.id} 
                                    image={prod.doc.image}
                                    name={prod.doc.name}
                                    price={prod.doc.price}
                                />

                                </div>
                                <div className="cart__itemButton">
                                    <button onClick={() => {handleDelete(prod.docid)}}>Remove from cart</button>
                                </div>
                            
                        </div>
                        )
                    })}

                </div>

                <div className="cart__totalPrice">
                    <p>Your order is eligible for FREE Delivery.</p>
                    <p> Select this option at checkout.</p>
                    <h3>Subtotal ({cartArray.length} items): <span>${totalPrice}</span></h3>
                    <button>Proceed to Buy</button>
                </div>
            
            </div>
            
            
        </div>
    )
}

export default Cart
