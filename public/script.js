let registerForm = document.getElementById('form');

import { addInfo } from './firebase.js';
registerForm.addEventListener('submit', (e) => {
	e.preventDefault();
	let fullName = document.getElementById('fullName').value;
	let email = document.getElementById('email').value;
	let msg = document.getElementById('msg').value;
	if (fullName !== '' && email !== '') {
		if(addInfo(fullName, email, msg)){
		alert('פרטיך נשלחו');}
	} else {
		alert('נא למלא שם מלא וכתובת אי-מייל');
	}
});


