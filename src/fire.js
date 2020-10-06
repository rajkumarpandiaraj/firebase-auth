import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyDotV12xqS0SuBuMeXwUgM4hZPFIzqGUGs",
    authDomain: "login-d4ad8.firebaseapp.com",
    databaseURL: "https://login-d4ad8.firebaseio.com",
    projectId: "login-d4ad8",
    storageBucket: "login-d4ad8.appspot.com",
    messagingSenderId: "199273487685",
    appId: "1:199273487685:web:16357c55b0509a74ea722c"
    };
    const fire = firebase.initializeApp(firebaseConfig);
    export default fire ;