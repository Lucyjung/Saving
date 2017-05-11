import * as firebase from "firebase";

function initFireBase (){
    var config = {
        apiKey: "AIzaSyCbnv2EEW3GYVAO8oxlaLl-JrP6MKD1PXs",
        authDomain: "fir-1-4004c.firebaseapp.com",
        databaseURL: "https://fir-1-4004c.firebaseio.com",
        storageBucket: "fir-1-4004c.appspot.com",
        messagingSenderId: "963390355699"
    };
    firebase.initializeApp(config);
}
export function writeUserData(userId, name, email, imageUrl) {
    initFireBase();
    firebase.database().ref('users/' + userId).set({
        username: name,
        email: email,
        profile_picture : imageUrl
    });
}

export function readUserData(userId) {
    initFireBase();
    return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
        console.log(snapshot.val().username);
    });
}
