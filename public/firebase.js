import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";

const firebaseConfig = {
	apiKey: 'AIzaSyACuGdZnxAcGsL56-L6AfvJwgd0RoVENBo',
	authDomain: 'transform-into-love.firebaseapp.com',
	databaseURL: 'https://transform-into-love-default-rtdb.europe-west1.firebasedatabase.app',
	projectId: 'transform-into-love',
	storageBucket: 'transform-into-love.appspot.com',
	messagingSenderId: '695982531944',
	appId: '1:695982531944:web:779f842144720ba5c9a2dd',
	measurementId: 'G-8Q0X6JLG5W'
};
const app = initializeApp(firebaseConfig);

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



// /**
// * Here we're using Gmail to send
// */
// // let transporter = nodemailer.createTransport({
// //     service: 'gmail',
// //     auth: {
// //         user: 'timor.makmel@gmail.com',
// //         pass: 'Love29058'
// //     }
// // });

// // exports.sendMail = functions.https.onRequest((request, responde) => {
// //     cors(req, res, () => {

// //         // getting dest email by query string
// //         const dest = req.query.dest;

// //         const mailOptions = {
// //             from: 'Your Account Name <yourgmailaccount@gmail.com>', // Something like: Jane Doe <janedoe@gmail.com>
// //             to: dest,
// //             subject: 'I\'M A PICKLE!!!', // email subject
// //             html: `<p style="font-size: 16px;">Pickle Riiiiiiiiiiiiiiiick!!</p>
// //                 <br />
// //                 <img src="https://images.prod.meredith.com/product/fc8754735c8a9b4aebb786278e7265a5/1538025388228/l/rick-and-morty-pickle-rick-sticker" />
// //             ` // email content in HTML
// //         };

// //         // returning result
// //         return transporter.sendMail(mailOptions, (erro, info) => {
// //             if(erro){
// //                 return res.send(erro.toString());
// //             }
// //             return res.send('Sended');
// //         });
// //     });
// // });
