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

            <div className="productDesc__desc">
                <div className="productDesc__desc__info">
                    <h1>{prodDisplay.title}</h1>
                    
                    <p>{prodDisplay.description}</p>

                    <h3><strong>${prodDisplay.price}</strong></h3>
                </div>

                <div className="productDesc__desc__addCart">
                    <div>
                        <button onClick={handleAddCart}>
                            Add to Cart
                        </button>
                    </div>
                    
                    <div>
                    <a href={"http://localhost:3000/cart"} > 
                        <button onClick={handleAddCart}>
                            Buy Now
                        </button>
                    </a>
                        
                    </div>
                    

                </div>  
            </div>
               
        </div>
    )
}
export default ProductDesc;