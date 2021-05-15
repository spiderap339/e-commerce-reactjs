import React, {useState, useEffect, useContext} from 'react'
import Store,{Context} from "./Store"
import "./productDesc.css"
import {db} from './firebase';
import firebase,{auth} from 'firebase'
 
const ProductDesc = ({productArray, prodId}) => {
    
    const {email, addCart} = useContext(Context);
    const [prodDisplay, setProdDisplay] = useState({})    
    
    useEffect(() => {  
            productArray.map((product) => {
                prodId === product.id ? (
                    //console.log("object initialized")
                    setProdDisplay(product)     
                ) : 
                (
                    console.log("not ok")
                )
            })
        }
    , [])

    
    const handleAddCart = () => {


        email? (
            
        db.collection("userid").doc(email).collection("carts").doc().set({
            id : prodId, 
            name : prodDisplay.title, 
            price: prodDisplay.price,
            image : prodDisplay.image

        })
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error.message);
        })

        )
        :
        (alert("You have to login first"))
    }
    
    
    return (
        <div className="productDesc">
            {/* <h1>Now Description is here...</h1> */}
            {/* <h1>{prodId}</h1> */}
            {/* <h1>{state.length}</h1> */}
            {/* <div>{prodDisplay.name} </div> */}

            <div className="productDesc__image">
                <img 
                    src={prodDisplay.image}
                    alt="Image not found"
                />
            </div>
            <div className="productDesc__info">
                <h1>{prodDisplay.name}</h1>

                <p>{prodDisplay.description}</p>

                <h3><strong>{prodDisplay.price}</strong></h3>
            </div>

            <div className="productDesc__addCart">
                {/* <button onClick = {() => {
                    console.log('added')
                    setState([...state,
                        {
                            id : prodId, 
                            name : prodDisplay.name, 
                            price: prodDisplay.price,
                            image : prodDisplay.image
                        }
                    ])
                    
                }}>
                    Add to Cart
                </button> */}

                <button onClick={handleAddCart}>
                    Add to Cart
                </button>

                <button>
                    Buy Now
                </button>


            </div>  
            {/* {
            firebase.auth().onAuthStateChanged((firebaseUser)=>{
                    firebaseUser?
                    setEmail(firebaseUser.email):
                    setEmail(null)
            })
            }  */}
           
                
        </div>
    )
}
export default ProductDesc;