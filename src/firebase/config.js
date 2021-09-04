import firebase from 'firebase/app'
import 'firebase/firestore'
import {initializeApp} from 'firebase/app'

const app =firebase.initializeApp({
	apiKey: "AIzaSyBe3aTbt2J2_qZ70IhF1_tfI1qE5CsqvCM",
  	authDomain: "coder-rcts.firebaseapp.com",
  	projectId: "coder-rcts",
  	storageBucket: "coder-rcts.appspot.com",
  	messagingSenderId: "841480208016",
  	appId: "1:841480208016:web:4924f8e974dbc1b8ee2215"
})
export function getFirebase(){
	return app;
}
export function getFirestore(){
	return firebase.firestore(app)
}