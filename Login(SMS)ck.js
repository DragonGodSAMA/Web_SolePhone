document.addEventListener('DOMContentLoaded', function () {
    const phoneInput = document.getElementById('un');
    const codeInput = document.getElementById('pw');
    const loginBtn = document.querySelector('.pwd-box button');

    const phoneErrorTip = document.createElement('div');
    phoneErrorTip.style.color = '#ff3333';
    phoneErrorTip.style.fontSize = '10px';
    phoneErrorTip.style.margin = '-15px 50px 10px 50px';
    phoneErrorTip.style.display = 'none';
    phoneErrorTip.textContent = '×Please enter a valid phone number';
    phoneInput.parentNode.insertBefore(phoneErrorTip, phoneInput.nextSibling);

    const phoneRegex = /^1[3-9]\d{9}$/;

    function resetInputState(input, errorTip) {
        input.style.borderColor = '#e3e3e3'; 
        errorTip.style.display = 'none';
    }

    loginBtn.addEventListener('click', function (e) {
        e.preventDefault();

        const phoneVal = phoneInput.value.trim();
        const codeVal = codeInput.value.trim();

        // 校验手机号
        const isPhoneValid = phoneRegex.test(phoneVal);

        if (!isPhoneValid) {
            phoneInput.style.borderColor = '#ff3333';
            phoneErrorTip.style.display = 'block';
            phoneInput.value = ''; 
        } else {
            resetInputState(phoneInput, phoneErrorTip);
        }

        if (isPhoneValid && codeVal.length > 0) {
            alert('Login check passed!');
         window.location.href = 'HomePage.html';
        }
    });

    phoneInput.addEventListener('input', function () {
        resetInputState(phoneInput, phoneErrorTip);
    });

    [phoneInput, codeInput].forEach(input => {
        input.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                loginBtn.click();
            }
        });
    });
});