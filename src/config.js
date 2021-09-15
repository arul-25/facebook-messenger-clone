import firebase from "firebase"
firebase.initializeApp({
	// For Firebase JS SDK v7.20.0 and later, measurementId is optional
	apiKey: "AIzaSyBLGXeBG5rGZAfKQRkmu56sbYsRFUrCHeM",
	authDomain: "facebook-messenger-clone-2c2ce.firebaseapp.com",
	databaseURL: "https://facebook-messenger-clone-2c2ce-default-rtdb.asia-southeast1.firebasedatabase.app",
	projectId: "facebook-messenger-clone-2c2ce",
	storageBucket: "facebook-messenger-clone-2c2ce.appspot.com",
	messagingSenderId: "87247765099",
	appId: "1:87247765099:web:b2e6290f54f9b890dabb2e",
	measurementId: "G-3CKLBCQY3V"
})

const db = firebase.firestore()

export default db
