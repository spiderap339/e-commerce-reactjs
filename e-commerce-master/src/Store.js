import React, {useState, useEffect} from 'react'
import {db,auth} from './firebase'


export const Context = React.createContext();

const Store = ({children}) => { 
    // const [state, setState]=useState(cartArray);
    
    const [email,setEmail]=useState(null)
    const [cartArray,setCartArray] = useState([]);

    
    // email ? 
    // (   
    //     //var docRef = db.collection("cities").doc("SF")

    //     db.collection("userid").doc(email).collection("carts").get()
    //     .then((query) => {
    //         query.forEach((doc) => {
    //             console.log("doc => ", doc.data());
    //             setCartArray([
    //                 ...cartArray,
    //                 {
    //                     docid: doc.id,
    //                     doc: doc.data()
    //                 }
    //             ]

    //             )
                
    //         })
    //     })
    //     .catch((error) => {
    //         console.log("Error getting document:", error)
    //     })
    // ) 
    // :
    // (
    //     console.log("not logged in...")
    // )
    var f = false;

    auth.onAuthStateChanged((firebaseUser)=>{
        // console.log("auth state change",firebaseUser)
        firebaseUser?
        setEmail(firebaseUser.email):
        setEmail(null)
        f = true;
    })
    useEffect(() => {

        email ? (
            //this is where code runs
            db.collection('userid').doc(email).collection('carts').onSnapshot(snapshot=>{
                //everytime the new posts added, this code fires..
                
                //setProductArray(snapshot.docs.map((doc) =>doc.data()))
    
                setCartArray(snapshot.docs.map((doc) =>({
                    
                    docid : doc.id,
                    doc : doc.data(),
                })))
    
            })

        ) : (
            console.log("not logged in...")
        )
        
      }, [email])
    
    const addCart=()=>{
        console.log("Added to Cart");
    }
    const deleteCart = () => {
        console.log("deleted from cart")
    }

    console.log("from Store",cartArray);
    console.log("from store", email)
    return (
        <div className="store">
            <Context.Provider value={ {email, cartArray ,addCart, deleteCart} }>
                {children}
            </Context.Provider>
        </div>
    )
}

export default Store
