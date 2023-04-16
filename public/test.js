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
import { addInfo } from './firebase.js';
// import firebase from "https://www.gstatic.com/firebasejs/5.9.1/firebase.js";
firebase.initializeApp(config);
// var functions = firebase.functions(); // Use this to test against the deployed functions
var functions = functionsDebug(config, 5001); //Use this to test against locally deployed functions

document.getElementById('form').addEventListener('submit',(e) => {
	e.preventDefault();
    var sendEmail = functions.httpsCallable('sendEmail');
    let fullName = document.getElementById('fullName').value;
	let email = document.getElementById('email').value;
	let msg = document.getElementById('msg').value;
    sendEmail({ fullName: fullName,email:email,msg:msg})
    .then(function (result) {
        // Read result of the Cloud Function.
        // alert(result)
        console.log("sent email")
      addInfo(fullName, email, msg).then(result=>alert('פרטיך נשלחו'))
        
    }).catch(function (error) {
        
		alert('נא למלא שם מלא וכתובת אי-מייל');
        console.log(error);
    });
});

function functionsDebug (config, port) {
    var url = `http://localhost:${port}/${config.authDomain.split('.')[0]}/us-central1`
    var httpsCallable = function (funcName) {
        return async (data) => {
            var response = await fetch(`${url}/${funcName}`, { body: JSON.stringify({ "data": data }), method: "POST", headers: { "content-type": "application/json; charset=UTF-8" } });
            return await response.json();
        }
    }
    return {
        httpsCallable: httpsCallable
    }
}