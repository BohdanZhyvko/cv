//contact information hiden in html
var contactEmail = document.getElementById('contact-email-write');
var arrEmail = ['com','.','gmail','@','zhyvko','.','bohdan'];
contactEmail.innerHTML = arrEmail.reverse().join('');

var contactPhoneNumber = document.getElementById('contact-phone-write');
contactPhoneNumber.innerHTML = ['9','3','4','2','-',,'8','5','1','-','3','6','0',
                            '-','8','3','+'].reverse().join('');
var contactSkype = document.getElementById('contact-skype-write');
contactSkype.innerHTML = ['zhyvko','.','bohdan'].reverse().join('');

//send form contact me on email
function doSubmit(){
    var formAction = document.getElementById('form-send-massege')
    formAction.action = 'https://formspree.io/' + arrEmail.join('');
    formAction.submit();
}

//google Map
function myMap() {
    var mapProp= {
        center:new google.maps.LatLng(49.8432204,24.0259262),
        zoom:17,
    };
    var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}