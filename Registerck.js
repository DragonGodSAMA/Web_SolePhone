document.addEventListener('DOMContentLoaded', function () {

    patt1 = /^[a-zA-Z ]+$/;
    patt2 = /^[a-zA-Z0-9 ]+$/;
    patt3 = /^[0-9]{11}$/;
    patt4 = /^[^@]+@[^@]+\.(cn|com)$/;
    patt5 = /^[a-zA-Z0-9]{6,}$/;

    nameInput = document.getElementById('name');
    addressInput = document.getElementById('address');
    phoneInput = document.getElementById('phone');
    emailInput = document.getElementById('email');
    usernameInput = document.getElementById('username');
    passwordInput = document.getElementById('password');

    function createErrorTip(input, errorText) {
        tip = document.createElement('div');
        tip.style.color = '#ff3333';
        tip.style.fontSize = '8px';
        tip.style.margin = '-15px 50px 10px 25px';
        tip.style.display = 'none';
        tip.textContent = '×' + errorText;
        input.parentNode.insertBefore(tip, input.nextSibling);
        return tip;
    }

    nameTip = createErrorTip(nameInput, '');
    addressTip = createErrorTip(addressInput, '');
    phoneTip = createErrorTip(phoneInput, '');
    emailTip = createErrorTip(emailInput, '');
    usernameTip = createErrorTip(usernameInput, '');
    passwordTip = createErrorTip(passwordInput, '');

    function resetInputState(input, tip) {
        input.style.borderColor = '#e3e3e3';
        tip.style.display = 'none';
    }

    function showError(input, tip, message) {
        input.style.borderColor = '#ff3333';
        tip.textContent = '×' + message;
        tip.style.display = 'block';
        input.value = '';
    }

    window.checkForm = function () {
        Name = document.getElementById("name").value;
        Address = document.getElementById("address").value;
        PhoneNum = document.getElementById("phone").value;
        email = document.getElementById("email").value;
        userN = document.getElementById("username").value;
        passw = document.getElementById("password").value;


        if (!patt1.test(Name)) {
            showError(nameInput, nameTip, "Enter The Correct Name! example: Tom Smith");
            return false;
        }
        resetInputState(nameInput, nameTip);

        if (!patt2.test(Address)) {
            showError(addressInput, addressTip, "Enter the correct address with only alphanumeric characters and space");
            return false;
        }
        resetInputState(addressInput, addressTip);

        if (!patt3.test(PhoneNum)) {
            showError(phoneInput, phoneTip, "Enter the correct China Mainland phone number");
            return false;
        }
        resetInputState(phoneInput, phoneTip);

        if (!patt4.test(email)) {
            showError(emailInput, emailTip, "Enter the correct email");
            return false;
        }
        resetInputState(emailInput, emailTip);

        if (!patt5.test(userN)) {
            showError(usernameInput, usernameTip, "Enter the correct username");
            return false;
        }
        resetInputState(usernameInput, usernameTip);

        if (!patt5.test(passw)) {
            showError(passwordInput, passwordTip, "Enter the correct password");
            return false;
        }
        resetInputState(passwordInput, passwordTip);

        window.location.href = 'LoginPage.html';
        return true;
    };
});