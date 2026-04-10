document.addEventListener('DOMContentLoaded', function () {
    const usernameInput = document.getElementById('un');
    const passwordInput = document.getElementById('pw');
    const loginBtn = document.querySelector('.pwd-box button');

    const usernameErrorTip = document.createElement('div');
    usernameErrorTip.style.color = '#ff3333';
    usernameErrorTip.style.fontSize = '10px';
    usernameErrorTip.style.margin = '-15px 50px 10px 50px';
    usernameErrorTip.style.display = 'none';
    usernameErrorTip.style.whiteSpace = 'nowrap';
    usernameErrorTip.textContent = '×Username must be between 6 and 12 characters';
    usernameInput.parentNode.insertBefore(usernameErrorTip, usernameInput.nextSibling);

    const passwordErrorTip = document.createElement('div');
    passwordErrorTip.style.color = '#ff3333';
    passwordErrorTip.style.fontSize = '10px';
    passwordErrorTip.style.margin = '-15px 50px 10px 50px'; 
    passwordErrorTip.style.display = 'none';
    passwordErrorTip.textContent = '×Password must be more than 6 characters';
    passwordInput.parentNode.insertBefore(passwordErrorTip, passwordInput.nextSibling);

    function validateUsername(value) {
        const len = value.trim().length;
        return len >= 6 && len <= 12;
    }

    function validatePassword(value) {
        return value.trim().length > 6;
    }

    function resetInputState(input, errorTip) {
        input.style.borderColor = '#e3e3e3'; 
        errorTip.style.display = 'none';
    }

    loginBtn.addEventListener('click', function (e) {
        e.preventDefault();

        const usernameVal = usernameInput.value;
        const passwordVal = passwordInput.value;

        let isUsernameValid = validateUsername(usernameVal);
        let isPasswordValid = validatePassword(passwordVal);

        if (!isUsernameValid) {
            usernameInput.style.borderColor = '#ff3333';
            usernameErrorTip.style.display = 'block';
            usernameInput.value = ''; 
        } else {
            resetInputState(usernameInput, usernameErrorTip);
        }

        // 校验密码
        if (!isPasswordValid) {
            passwordInput.style.borderColor = '#ff3333';
            passwordErrorTip.style.display = 'block';
            passwordInput.value = ''; 
        } else {
            resetInputState(passwordInput, passwordErrorTip);
        }

        if (isUsernameValid && isPasswordValid) {
            alert('Login check passed!');
            window.location.href = 'HomePage.html';
        }
    });

    usernameInput.addEventListener('input', function () {
        resetInputState(usernameInput, usernameErrorTip);
    });

    passwordInput.addEventListener('input', function () {
        resetInputState(passwordInput, passwordErrorTip);
    });

    [usernameInput, passwordInput].forEach(input => {
        input.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                loginBtn.click();
            }
        });
    });
});