var formData = document.getElementById('userDetails');

formData.addEventListener('submit',function () {
    console.log('email : ',document.getElementById('email').value);
    console.log('first name : ',document.getElementById('fname').value);
    console.log('last name : ',document.getElementById('lname').value);
});