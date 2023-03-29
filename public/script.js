// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACuGdZnxAcGsL56-L6AfvJwgd0RoVENBo",
  authDomain: "transform-into-love.firebaseapp.com",
  databaseURL: "https://transform-into-love-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "transform-into-love",
  storageBucket: "transform-into-love.appspot.com",
  messagingSenderId: "695982531944",
  appId: "1:695982531944:web:779f842144720ba5c9a2dd",
  measurementId: "G-8Q0X6JLG5W"
};


// import { getFirestore } from 'firebase/compat/firestore';
import {
    getFirestore,
    collection, doc, setDoc
    
  } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-firestore.js";

  
  const initApp=()=>{
    try {
        return getApp()
    } catch {
        return initializeApp(firebaseConfig)
    }
}

// Initialize Firebase
const app = initApp();

  const db = getFirestore(app);

  const contactInfo = collection(db, "infos");
  await setDoc(doc(contactInfo),{
    name: "shani", 
    email: "shani@m",
    msg: ""} );

    var fullName= document.getElementById("fullName");
var email= document.getElementById("email");
function send(){
    if (fullName.value !== ""  && email.value !== ""){
        alert ('פרטיך נשלחו') 
    }else {
        alert('נא למלא שם מלא וכתובת אי-מייל');
    };
};
// // Refernece contactInfo collections

// let contactInfo = firebase.database().ref('infos'); //create db with table name info
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

// // Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let name = document.querySelector("#fullName").value;
  let email = document.querySelector("#email").value;
  let msg = document.querySelector("#msg").value;
  console.log(name, email, msg);

  saveContactInfo(name, email, msg);

  document.querySelector(".contact-form").reset();
}


function saveContactInfo(fullName, email, message) {
	console.log(fullName, email, message);

	let newContactInfo = infos.push();

	newContactInfo.set({
		name: fullName,
		email: email,
		message: message
	});
}

// // saveContactInfo("shani s","sj@h","help")

// // Import the functions you need from the SDKs you need

// // import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // const analytics = getAnalytics(app);
