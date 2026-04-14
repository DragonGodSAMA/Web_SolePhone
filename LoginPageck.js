document.addEventListener('DOMContentLoaded', function () {

    patt5 = /^[a-zA-Z0-9]{6,}$/;

    usernameInput = document.getElementById('un');

    function createErrorTip(input, errorText) {
        tip = document.createElement('div');
        tip.style.color = '#ff3333';
        tip.style.fontSize = '10px';
        tip.style.margin = '-10px 0px 10px 50px';
        tip.style.display = 'none';
        tip.textContent = '×' + errorText;
        input.parentNode.insertBefore(tip, input.nextSibling);
        return tip;
    }

    usernameTip = createErrorTip(usernameInput, '');

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

    window.checkUNPWlen = function () {

        userN = document.getElementById("un").value;

        if (!patt5.test(userN)) {
            showError(usernameInput, usernameTip, "Enter the correct username");
            return false;
        }
        resetInputState(usernameInput, usernameTip);

        window.location.href = 'LoginPage.html';
        return true;
    };
});