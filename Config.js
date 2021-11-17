import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAWkfoM43GR5TsKI1VjVX-lURQu2QpTsMs",
    authDomain: "mybarterapp-3d751.firebaseapp.com",
    databaseURL: "https://mybarterapp-3d751-default-rtdb.firebaseio.com",
    projectId: "mybarterapp-3d751",
    storageBucket: "mybarterapp-3d751.appspot.com",
    messagingSenderId: "780305926425",
    appId: "1:780305926425:web:e651f7344828af6bb61d88"
};

firebase.initializeApp(firebaseConfig);

export default firebase.database();