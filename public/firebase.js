import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
// import config from '../functions/src/config'
const config = {
	apiKey: 'AIzaSyACuGdZnxAcGsL56-L6AfvJwgd0RoVENBo',
	authDomain: 'transform-into-love.firebaseapp.com',
	databaseURL: 'https://transform-into-love-default-rtdb.europe-west1.firebasedatabase.app',
	projectId: 'transform-into-love',
	storageBucket: 'transform-into-love.appspot.com',
	messagingSenderId: '695982531944',
	appId: '1:695982531944:web:779f842144720ba5c9a2dd',
	measurementId: 'G-8Q0X6JLG5W'
};
const app = initializeApp(config);

import {
	getFirestore,
	doc,
	getDoc,
	setDoc,
	collection,
	addDoc,
	updateDoc,
	deleteDoc,
	deleteField,
	query,
	where,
	getDocs
} from 'https://www.gstatic.com/firebasejs/9.18.0/firebase-firestore.js';


const db = getFirestore(app);

export const addInfo =async (fullName, email, msg) => {
	async function AddDocument_AutoId() {
		const contactInfo = collection(db, 'infos');
		let result=	await addDoc(contactInfo, {
			name: fullName,
			email: email,
			msg: msg
		});
		return result;
	}
	await AddDocument_AutoId();
	
};

export const addMail =async (details) => {
	async function AddDocument_AutoId() {
		const contactInfo = collection(db, 'mail');
		let result=	await addDoc(contactInfo, {
			to: 'shakimi88@gmail.com',
			message:{
				subject: 'Hello from Firebase!',
				html: `<h1>New Optional Customer</h1>
				<p>Name:${details.fullName}<br>
				Email:${details.email}<br>
				Message:${details.msg}</p>`
			}
		});
		return result;
	}
	await AddDocument_AutoId();
	
};

