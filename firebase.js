import React, { Component } from "react"; 
import firebase from 'firebase'; 
  
class tutorial extends Component{ 
render(){ 
return( 
<div> 
   <button 
         onClick={() => { 
           
     // Google provider object is created here. 
    const googleAuth =  
          new firebase.auth.GoogleAuthProvider(); 
               
    // using the object we will authenticate the user. 
    firebase.auth().signInWithPopup(googleAuth); 
                    }} > 
          Sign in with Google 
    </button> 
 </div> 
   ); 
  } 
 } 
 export default tutorial;