import React, { Component } from 'react'
import Login from '../components/Login'
import * as firebase from "firebase";
import { browserHistory } from 'react-router'

class LoginContainer extends Component{
    constructor () {
        super()
        this.state = {
            isLoading: true,
            status: true
        }
        var config = {
            apiKey: "AIzaSyCbnv2EEW3GYVAO8oxlaLl-JrP6MKD1PXs",
            authDomain: "fir-1-4004c.firebaseapp.com",
            databaseURL: "https://fir-1-4004c.firebaseio.com",
            storageBucket: "fir-1-4004c.appspot.com",
            messagingSenderId: "963390355699"
        };
        firebase.initializeApp(config);
    }
    componentDidMount () {
        try {
            var provider = new firebase.auth.FacebookAuthProvider();
            provider.addScope('user_birthday');
            firebase.auth().signInWithPopup(provider).then((result)=> {
                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                // [START_EXCLUDE]
                if (user){
                    // this.setState({
                    //     usersInfo: user.displayName,
                    //     isLoading : false
                    // });
                    browserHistory.push(`/index`)
                }
                else{
                    browserHistory.push(`/`)
                }

                // [END_EXCLUDE]
            }).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // [START_EXCLUDE]
                if (errorCode === 'auth/account-exists-with-different-credential') {
                    alert('You have already signed up with a different auth provider for that email.');
                    // If you are using multiple auth providers on your app you should handle linking
                    // the user's accounts here.
                } else {
                    console.error(error);
                }
                // [END_EXCLUDE]
            });

        } catch (error) {
            console.warn('Error in ResultsContainer:', error)
        }
    }
    render() {
        return (

            <Login
                isLoading={this.state.isLoading}
                usersInfo={this.state.usersInfo}/>
        )
    }
}
export default LoginContainer