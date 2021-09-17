import firebase from "firebase"
firebase.initializeApp({
	// For Firebase JS SDK v7.20.0 and later, measurementId is optional
	apiKey: "AIzaSyCDAX7Akv8y98SjR--Vr_RduuMTh_hhIAE",
	authDomain: "react-messenger-clone-df4d0.firebaseapp.com",
	projectId: "react-messenger-clone-df4d0",
	storageBucket: "react-messenger-clone-df4d0.appspot.com",
	messagingSenderId: "627191931226",
	appId: "1:627191931226:web:74639c8496e94c1be65363",
	measurementId: "G-GX81M4DRD0"
})

const db = firebase.firestore()

export default db
