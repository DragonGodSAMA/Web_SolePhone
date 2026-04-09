/*PengZhuoyan created on ARP 3rd.
* 
* This file is a Demo for checking if input is valid.
* For future usage: 'id' name needed
* You can change the regular expression to satisfy your need.
* update 17:47:59
* update Apr 7th 09:54:35 new feature: adapted to Register.html
*/
function checkForm()
{
    //'id' below should be adjusted flexibly
    Name = document.getElementById("name").value;
    Address = document.getElementById("address").value;
    PhoneNum = document.getElementById("phone").value;
    email = document.getElementById("email").value;
    userN = document.getElementById("username").value;
    passw = document.getElementById("password").value;
    
    patt1 = /^[a-zA-Z ]+$/;
    patt2 = /^[a-zA-Z0-9 ]+$/;
    patt3 = /^[0-9]{11}$/;
    patt4 = /^[^@]+@[^@]+\.(cn|com)$/;
    patt5 = /^[a-zA-Z0-9]{6,}$/;

    if (!patt1.test(Name)) {
        alert("Enter The Correct Name! example: Tom Smith");
        return false;
    }

    if (!patt2.test(Address)) {
        alert("Enter the correct address with only alphanumeric characters and space");
        return false;
    }

    if (!patt3.test(PhoneNum)) {
        alert("Enter the correct China Mainland phone number");
        return false;
    }

    if (!patt4.test(email)) {
        alert("Enter the correct email");
        return false;
    }

    if (!patt5.test(userN)) {
        alert("Enter the correct username");
        return false;
    }

    if (!patt5.test(passw)) {
        alert("Enter the correct password");
        return false;
    }
}


function checkForm_ori()
{
    //'id' below should be adjusted flexibly
    firstN = document.getElementById("fn").value; 
    lastN = document.getElementById("ln").value;
    phone = document.getElementById("ph").value;
    address = document.getElementById("add").value;
    
    patt1 = /^[a-zA-Z]+$/;
    patt2 = /^[0-9]{11}$/;
    patt3 = /^[a-zA-Z0-9 ]+$/;

    if (!patt1.test(firstN)) {
        alert("Type Correct Name! example: Tom Smith");
        return false;
    }

    if (!patt1.test(lastN)) {
        alert("Type Correct Name! example: Tom Smith");
        return false;
    }

    if (!patt2.test(phone)) {
        alert("Type correct China Mainland phone number");
        return false;
    }

    if (!patt3.test(address)) {
        alert("address should be a combination of letters, numbers and blank");
        return false;
    }
}