import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import provider from '../firebase/configure';
const Title = ({setUser,use}) => {

  const signIn = ()=>{
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      
      
      setUser(user.email);
      
      // ...
    }).catch(function(error) {
      setUser('Error!! Please sign-in again');
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }


  return (
    <div className="title">
      <h1>FireStory</h1>
      <h5 onClick={signIn}>{use}</h5>
      <h2>Share Pictures!!</h2>
      <p>Stays With You.Forever!</p>
    </div>
  )
}

export default Title;