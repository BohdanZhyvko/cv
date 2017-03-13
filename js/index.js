//contact information hiden in html
var contactEmail = document.getElementById('contact-email-write');

var arrEmail = ['com', '.', 'gmail', '@', 'zhyvko', '.', 'bohdan'];
contactEmail.innerHTML = arrEmail.reverse().join('');

var contactPhoneNumber = document.getElementById('contact-phone-write');
contactPhoneNumber.innerHTML = ['9', '3', '4', '2', '-', , '8', '5', '1', '-', '3', '6', '0', '-', '8', '3', '+'].reverse().join('');

var contactSkype = document.getElementById('contact-skype-write');
contactSkype.innerHTML = ['zhyvko', '.', 'bohdan'].reverse().join('');

//send form contact me on email
var formAction = document.getElementById('form-send-massege');
formAction.addEventListener('submit', function() {
    sendMassege()
});

function sendMassege() {
    formAction.action = 'https://formspree.io/' + arrEmail.join('');
}

document.getElementById('resumeBtn').addEventListener("click", goToResume);
function goToResume(){
     window.open('https://docs.google.com/document/d/1b9U7ghfoke4KV_ao7ZuAgHq6zMJaKPFAFBZ_3gXWEug/edit', '_blank');
}