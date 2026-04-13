document.addEventListener('DOMContentLoaded', function () {
    const patt1 = /^[a-zA-Z ]+$/;
    const patt2 = /^[a-zA-Z0-9 ]+$/;
    const patt3 = /^[0-9]{11}$/;
    const patt4 = /^[^@]+@[^@]+\.(cn|com)$/;
    const patt5 = /^[a-zA-Z0-9]{6,}$/;

    const nameInput = document.getElementById('name');
    const addressInput = document.getElementById('address');
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const registerBtn = document.querySelector('.Registration_button');

    function createErrorTip(input, errorText) {
        const tip = document.createElement('div');
        tip.style.color = '#ff3333';
        tip.style.fontSize = '10px';
        tip.style.margin = '-15px 50px 10px 25px'; 
        tip.style.display = 'none';
        tip.textContent = `×${errorText}`;
        input.parentNode.insertBefore(tip, input.nextSibling);
        return tip;
    }

    const nameTip = createErrorTip(nameInput, 'Name can only contain letters and spaces');
    const addressTip = createErrorTip(addressInput, 'Address can only contain letters, numbers and spaces');
    const phoneTip = createErrorTip(phoneInput, 'Phone number must be 11 digits');
    const emailTip = createErrorTip(emailInput, 'Email must be valid (ending with .cn or .com)');
    const usernameTip = createErrorTip(usernameInput, 'Username must be at least 6 alphanumeric characters');
    const passwordTip = createErrorTip(passwordInput, 'Password must be at least 6 alphanumeric characters');

    function resetInputState(input, tip) {
        input.style.borderColor = '#e3e3e3';
        tip.style.display = 'none';
    }

    function validateInput(input, regex, tip, errorEmptyText) {
        const val = input.value.trim();
        if (val === '') {
            input.style.borderColor = '#ff3333';
            tip.textContent = `×${errorEmptyText}`;
            tip.style.display = 'block';
            input.value = '';
            return false;
        }
        if (!regex.test(val)) {
            input.style.borderColor = '#ff3333';
            tip.style.display = 'block';
            input.value = '';
            return false;
        }
        resetInputState(input, tip);
        return true;
    }

    window.checkForm = function () {
        let isNameValid = validateInput(nameInput, patt1, nameTip, 'Name cannot be empty');
        let isAddressValid = validateInput(addressInput, patt2, addressTip, 'Address cannot be empty');
        let isPhoneValid = validateInput(phoneInput, patt3, phoneTip, 'Enter the correct phone number');
        let isEmailValid = validateInput(emailInput, patt4, emailTip, 'Email cannot be empty');
        let isUsernameValid = validateInput(usernameInput, patt5, usernameTip, 'Username cannot be empty');
        let isPasswordValid = validateInput(passwordInput, patt5, passwordTip, 'Password cannot be empty');

        if (isNameValid && isAddressValid && isPhoneValid && isEmailValid && isUsernameValid && isPasswordValid) {
            alert('All fields are valid! Registration successful.');
             window.location.href = 'LoginPage.html';
        }
    };

    const allInputs = [nameInput, addressInput, phoneInput, emailInput, usernameInput, passwordInput];
    const allTips = [nameTip, addressTip, phoneTip, emailTip, usernameTip, passwordTip];

    allInputs.forEach((input, index) => {
        input.addEventListener('input', () => resetInputState(input, allTips[index]));
    });

    allInputs.forEach(input => {
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                registerBtn.click();
            }
        });
    });
});