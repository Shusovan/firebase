import React, { Component } from "react"; 
import firebase from 'firebase'; 
  
class tutorial extends Component{ 
render(){ 
return( 
<div> 
   <button 
         onClick={() => { 
            
    const googleAuth =  
          new firebase.auth.GoogleAuthProvider(); 
                
    firebase.auth().signInWithPopup(googleAuth); 
                    }} > 
          Sign in with Google 
    </button> 
 </div> 
   ); 
  } 
 } 

const firebaseConfig = { 
  apiKey: "****", 
    authDomain: "****.firebaseapp.com", 
    databaseURL: "https://*****.firebaseio.com", 
    projectId: "****", 
    storageBucket: "****.appspot.com", 
    messagingSenderId: "****", 
    appId: "****", 
    measurementId: "****"
}; 

class Firebase 
{ 
  constructor() 
  { 
    firebase.initializeApp(firebaseConfig); 
  } 
} 
  
export default Firebase; 