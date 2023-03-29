var fullName= document.getElementById("fullName");
var email= document.getElementById("email");
function send(){
    if (fullName.value !== ""  && email.value !== ""){
        alert ('פרטיך נשלחו') 
    }else {
        alert('נא למלא שם מלא וכתובת אי-מייל');
    };
};