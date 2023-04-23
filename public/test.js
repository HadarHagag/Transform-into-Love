
import { addInfo,addMail } from './firebase.js';

document.getElementById('form').addEventListener('submit',(e) => {
	e.preventDefault();
    // var sendEmail = functions.httpsCallable('sendEmail');
    let fullName = document.getElementById('fullName').value;
	let email = document.getElementById('email').value;
	let msg = document.getElementById('msg').value;
    addMail({ fullName: fullName,email:email,msg:msg})
    .then(function (result) {
        // Read result of the Cloud Function.
        // alert(result)
        console.log("sent email")
    //   addInfo(fullName, email, msg);
    alert("sent mail")
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