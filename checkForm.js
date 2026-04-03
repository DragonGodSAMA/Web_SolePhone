/*PengZhuoyan created on ARP 3rd.
* 
* This file is a Demo for checking if input is valid.
* For future usage: 'id' name needed
* You can change the regular expression to satisfy your need.
* update 17:47:59
*/

function checkForm()
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