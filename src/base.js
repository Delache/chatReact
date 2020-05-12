import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCU4_EikBT359rHuBB-5EG2x7LzDeYYXzA",
    authDomain: "chatreact-4c2b5.firebaseapp.com",
    databaseURL: "https://chatreact-4c2b5.firebaseio.com",
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }
export default base